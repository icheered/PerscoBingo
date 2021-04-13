from fastapi import APIRouter, Request
import asyncio

from rethinkdb import RethinkDB

import json
import random

Admin_Router = APIRouter()
"""
Add name
Remove name

Add question
Edit question
Remove question

Get random question
Publish question -> Set question_is_ready to true

"""

@Admin_Router.get('/name')
async def get_names(request: Request):
    """
    Get names
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Getting names from name table")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    r = RethinkDB()

    ret_cursor = r.table(config["PEOPLE_TABLE_NAME"]).run(db_conn)
    ret = list(ret_cursor)
    return ret

@Admin_Router.post('/name')
async def add_name(request: Request, name: str):
    """
    Add name to people table
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Adding name to name table")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    r = RethinkDB()

    person = {
        "name": name,
    }

    # Check if the person doesn't already exist
    ret_cursor = r.table(config["PEOPLE_TABLE_NAME"]).run(db_conn)
    ret = list(ret_cursor)
    for entry in ret:
        if entry["name"] == name:
            logger.warning("Tried adding question but already exists")
            return False

    ret_cursor = r.table(config["PEOPLE_TABLE_NAME"]).insert(person).run(db_conn)
    if ret_cursor["inserted"] == 1:
        return True
    else:
        return False

@Admin_Router.delete('/name')
async def remove_name(request: Request, nameID: str):
    """
    Remove name from name table
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Removing name from name table")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    r = RethinkDB()

    ret_cursor = r.table(config["PEOPLE_TABLE_NAME"]).filter(r.row["id"] == nameID).delete().run(db_conn)

    if ret_cursor["deleted"] == 1:
        return True
    else:
        return False




@Admin_Router.get('/question')
async def get_questions(request: Request):
    """
    Get names
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Getting list of names")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    r = RethinkDB()

    ret_cursor = r.table(config["QUESTIONS_TABLE_NAME"]).run(db_conn)
    ret = list(ret_cursor)
    return ret

@Admin_Router.post('/question')
async def add_question(request: Request, question: str):
    """
    Add question to question table
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Adding question to table")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    r = RethinkDB()

    new_question = {
        "question": question
    }

    # Check if the question doesn't already exist
    ret_cursor = r.table(config["QUESTIONS_TABLE_NAME"]).run(db_conn)
    ret = list(ret_cursor)
    for entry in ret:
        if entry["question"] == question:
            logger.warning("Tried adding question but already exists")
            return False

    ret_cursor = r.table(config["QUESTIONS_TABLE_NAME"]).insert(new_question).run(db_conn)
    if ret_cursor["inserted"] == 1:
        return True
    else:
        return False

@Admin_Router.delete('/question')
async def remove_question(request: Request, questionID: str):
    """
    Remove question from question table
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Removing question from table")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    r = RethinkDB()

    ret_cursor = r.table(config["QUESTIONS_TABLE_NAME"]).filter(r.row["id"] == questionID).delete().run(db_conn)

    if ret_cursor["deleted"] == 1:
        return True
    else:
        return False

@Admin_Router.get('/question/getnew')
async def get_new_question(request: Request):
    """
    Set a random question as the current question
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Setting a new random question")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    state_manager = request.app.state.dependencies["state_manager"]
    r = RethinkDB()

    ret_cursor = r.table(config["QUESTIONS_TABLE_NAME"]).run(db_conn)
    ret = list(ret_cursor)
    q = random.choice(ret)

    state_manager.question = q["question"]

    # Also set the people from the database to the current people selection
    ret_cursor = r.table(config["PEOPLE_TABLE_NAME"]).run(db_conn)
    ret = list(ret_cursor)
    peoplelist = []
    for person in ret:
        peoplelist.append(person["name"])
    state_manager.people = peoplelist
    return True

@Admin_Router.get('/question/setready')
async def set_question_ready(request: Request, ready: bool):
    """
    Set the flag of 'question is ready'
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Setting the flag that the next question is ready")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    state_manager = request.app.state.dependencies["state_manager"]
    
    if ready:
        state_manager.question_is_ready = True
        state_manager.results_is_ready = False
        state_manager.wait_for_next_question = False
    else:
        state_manager.question_is_ready = False
    
    return ready

@Admin_Router.get('/question/setnextready')
async def set_next_question_ready(request: Request, ready: bool):
    """
    Set the flag of 'wait for next question'
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Setting flag for waiting for next question")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    state_manager = request.app.state.dependencies["state_manager"]
    
    if ready:
        state_manager.wait_for_next_question = True
        state_manager.question_is_ready = False
        state_manager.results_is_ready = False
        state_manager.results = []
        state_manager.submission_array = []
    else:
        state_manager.wait_for_next_question = False
    
    return ready

@Admin_Router.get('/results/setready')
async def set_results_ready(request: Request, ready: bool):
    """
    Set the flag of "results are ready"
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Setting flag for waiting for next question")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    state_manager = request.app.state.dependencies["state_manager"]
    
    if ready:
        state_manager.results_is_ready = True
        state_manager.wait_for_next_question = False
        state_manager.question_is_ready = False
    else:
        state_manager.results_is_ready = False
    
    return ready

@Admin_Router.get('/results/calculate')
async def calculateResults(request: Request):
    """
    Force the results to be calculated
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Setting flag for waiting for next question")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    state_manager = request.app.state.dependencies["state_manager"]

    score_array = []
    for person in state_manager.people:
        newentry = {
            "name": person,
            "score": 0
        }
        score_array.append(newentry)
    
    # Loop through all the submissions
    for entry in state_manager.submission_array:
        # Loop through all the names in the submission
        for i in range(len(entry["order"])):
            # Loop through each name in the score_array, if the names match then add 'i' to the score
            for name in score_array:
                if name["name"] == entry["order"][i]:
                    name["score"] += i
    
    unsorted = True
    while unsorted:
        unsorted = False
        for i in range(len(score_array) - 1):
            if score_array[i]["score"] > score_array[i+1]["score"]:
                temp = score_array[i]
                score_array[i] = score_array[i+1]
                score_array[i + 1] = temp
                unsorted = True
    
    logger.info(score_array)
    outputarray = []
    for item in score_array:
        outputarray.append(item["name"])
    state_manager.results = outputarray
    state_manager.results_is_ready = True
    state_manager.question_is_ready = False
    state_manager.wait_for_next_question = False

@Admin_Router.get('/question/getresultsarray')
async def get_results_array(request: Request):
    """
    Get array of submissions
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Getting submission array")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    state_manager = request.app.state.dependencies["state_manager"]
    
    resultsarray = state_manager.submission_array

    return resultsarray


@Admin_Router.get('/submission')
async def get_submission_array(request: Request):
    """
    Get array of all submissions
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Getting submission array")
    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    r = RethinkDB()

    ret_cursor = r.table(config["SUBMISSIONS_TABLE_NAME"]).run(db_conn)
    ret = list(ret_cursor)
    return ret
