"""
Get Question_is_ready
Get questions

Get names

Post order

Get results_is_ready

Get results


"""
from fastapi import APIRouter, Request
import asyncio

import datetime
import json
import random
import ast
from rethinkdb import RethinkDB

User_Router = APIRouter()

@User_Router.get('/question/ready')
async def get_question_ready(request: Request):
    """
    Get whether the question is ready or not
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Checking if the question is ready")
    state_manager = request.app.state.dependencies["state_manager"]
    if state_manager.question_is_ready:
        return True
    else:
        return False

@User_Router.get('/question/nextquestion')
async def wait_for_next_question(request: Request):
    """
    Get whether the question is ready or not
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Checking if a NEW question is ready")
    state_manager = request.app.state.dependencies["state_manager"]
    if state_manager.wait_for_next_question:
        return True
    else:
        return False

@User_Router.get('/question')
async def get_question(request: Request):
    """
    Get the current question
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Getting the current question")
    state_manager = request.app.state.dependencies["state_manager"]
    question = state_manager.question
    return question

@User_Router.get('/people')
async def get_people(request: Request):
    """
    Get the list of parcitipating people
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Getting list of people")
    state_manager = request.app.state.dependencies["state_manager"]
    people = state_manager.people
    random.shuffle(people)
    return people

@User_Router.get('/results/ready')
async def get_results_ready(request: Request):
    """
    Get whether the results is ready or not
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Checking if the results are ready")
    state_manager = request.app.state.dependencies["state_manager"]
    if state_manager.results_is_ready:
        return {"status": True}
    else:
        people_list = []
        for entry in state_manager.submission_array:
            people_list.append(entry["submitter"])
        return {"status": False, "people": people_list}

@User_Router.get('/results')
async def get_results(request: Request):
    """
    Get the results
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Getting the results")
    state_manager = request.app.state.dependencies["state_manager"]
    results = state_manager.results
    if results is None:
        return false
    else:
        return results

@User_Router.post('/results')
async def post_submission(request: Request, result: str):
    """
    Post the ordered list
    """
    logger = request.app.state.dependencies["logger"]
    logger.info("Posting a new submission")

    db_conn = request.app.state.dependencies["db_conn"]
    config = request.app.state.dependencies["config"]
    
    state_manager = request.app.state.dependencies["state_manager"]
    r = RethinkDB()

    formatted_results = ast.literal_eval(result)

    ordered_entry = []
    for entry in formatted_results["order"]:
        ordered_entry.append(entry["title"])

    new_entry = {
        "submitter": formatted_results["owner"],
        "order": ordered_entry
    }
    already_exists = False
    for submission in state_manager.submission_array:
        if submission["submitter"] == new_entry["submitter"]:
            already_exists = True
            logger.info("Updating sumission by "+str(submission["submitter"]))
            submission["order"] = new_entry["order"]
    if not already_exists:
        logger.info("Adding new sumission by "+str(new_entry["submitter"]))
        state_manager.submission_array.append(new_entry)


    new_submission = {
        "time": str(datetime.datetime.now()),
        "question": state_manager.question,
        "submission": new_entry
    }

    ret_cursor = r.table(config["SUBMISSIONS_TABLE_NAME"]).insert(new_submission).run(db_conn)
    




    # Also set the people from the database to the current people selection
    
    ret_cursor = r.table(config["PEOPLE_TABLE_NAME"]).run(db_conn)
    ret = list(ret_cursor)
    peoplelist = []
    for person in ret:
        peoplelist.append(person["name"])
    state_manager.people = peoplelist


    # If everyone has submitted, create the results and set results_ready to true
    if len(state_manager.submission_array) == len(state_manager.people):
        logger.info("Everyone has submitted, calculating result")
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
        



            
                
                    
