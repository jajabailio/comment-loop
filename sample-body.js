/*

Guide To The Sample Data

SURVEY
1. Copy the value of "createSurveyJSON" in line 20 to test creating a Survey

RESPONSE
2. Copy the value of "createResponseJSON" in line 458 to test creating a new Response. (NOTE: The _ids are from a different instance as per the one you newly created. This is so that you don't have to change the values)

FETCH RESPONSE by Id
3. "/api/responses/60ce8697539b27ab5dd92477"

FETCH RESPONSE by Survey Id
4. "/api/surveys/responses/60cd961ed1f2a9a53aab8bc5"


*/

var createSurveyJSON = {
    "name": "Template 1",
    "main_question": {
        "text": "Leave a comment about...",
        "options": [
            {
                "text": "Food",
                "question": {
                    "text": "The food was...",
                    "options": [
                        {
                            "text": "Great",
                            "question": {
                                "text": "I loved the food because...",
                                "options": [
                                    {
                                        "text": "It was delicious",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The price was worth it",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The food was presentable",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Good",
                            "question": {
                                "text": "I liked the food because...",
                                "options": [
                                    {
                                        "text": "It was somewhat delicious",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The price was just right",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The food looked a bit presentable",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Bad",
                            "question": {
                                "text": "I didn't like the food because...",
                                "options": [
                                    {
                                        "text": "It tasted awful",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The price was not worth it",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The food was not presentable",
                                        "question": {
                                            "text": "The particular food I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "Burger"
                                                },
                                                {
                                                    "text": "Fries"
                                                },
                                                {
                                                    "text": "Chicken"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                "text": "Service",
                "question": {
                    "text": "The service was...",
                    "options": [
                        {
                            "text": "Great",
                            "question": {
                                "text": "I loved the service because...",
                                "options": [
                                    {
                                        "text": "The staff greeted with manners",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The staff showed professionalism in their job",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The staff was attentive to their customers",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Good",
                            "question": {
                                "text": "I liked the service because...",
                                "options": [
                                    {
                                        "text": "The staff was accomodating",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The staff showed good responses to customer requests",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The staff was attentive to their customers",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Bad",
                            "question": {
                                "text": "I didn't like the service because...",
                                "options": [
                                    {
                                        "text": "The staff was disrespectufl",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The staff was being unprofessional with their job",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    },
                                    {
                                        "text": "The staff was not attentive to their customers",
                                        "question": {
                                            "text": "The staff I'm referring to is...",
                                            "options": [
                                                {
                                                    "text": "John Doe"
                                                },
                                                {
                                                    "text": "Helent Hutt"
                                                },
                                                {
                                                    "text": "Matt Daamon"
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                "text": "Ambiance",
                "question": {
                    "text": "The place was...",
                    "options": [
                        {
                            "text": "Great",
                            "question": {
                                "text": "I loved the ambiance because...",
                                "options": [
                                    {
                                        "text": "The place was clean and tidy"
                                    },
                                    {
                                        "text": "The place had an aesthetic appearance"
                                    },
                                    {
                                        "text": "The place gave a homey vibe"
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Good",
                            "question": {
                                "text": "I liked the ambiance because...",
                                "options": [
                                    {
                                        "text": "The place was clean and tidy"
                                    },
                                    {
                                        "text": "The place had an aesthetic appearance"
                                    },
                                    {
                                        "text": "The place gave a homey vibe"
                                    }
                                ]
                            }
                        },
                        {
                            "text": "Bad",
                            "question": {
                                "text": "I didn't like the ambiance because...",
                                "options": [
                                    {
                                        "text": "The place was dirty"
                                    },
                                    {
                                        "text": "The place was not aesthetically pleasing"
                                    },
                                    {
                                        "text": "The place gave a foul stench"
                                    }
                                ]
                            }
                        }
                    ]
                }
            }
        ]
    }
}

var createResponseJSON = {
    "survey_id": "60cd961ed1f2a9a53aab8bc5",
    "email": "johndoe@sample.com",
    "survey": [
        {
            "question": "Leave a comment about...",
            "option": "Food",
            "option_id": "60cd9486ac0880a501233492"
        },
        {
            "question": "The food was...",
            "option": "Good",
            "option_id": "60cd9486ac0880a5012334a0"
        },
        {
            "question": "I liked the food because...",
            "option": "It was somewhat delicious",
            "option_id": "60cd9486ac0880a5012334a0"
        },
        {
            "question": "The particular food I'm referring to is...",
            "option": "Chicken",
            "option_id": "60cd9486ac0880a5012334a4"
        }
    ]
}

