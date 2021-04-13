class State_Manager:
    def __init__(self):
        self.question_is_ready = False
        self.wait_for_next_question = False
        self.results_is_ready = False
        self.people = []
        self.question = ""
        self.results = []
        self.submission_array = []
        pass