import cohere  
co = cohere.Client('MqiXub4lmuVuYw8wwxDcd3Cy1jIjrD9CMIvkWOt5')

from cohere.classify import Example

examples = [
  Example("you are hot trash", "Toxic"),  
  Example("go to hell", "Toxic"),
  Example("get rekt moron", "Toxic"),  
  Example("get a brain and use it", "Toxic"), 
  Example("say what you mean, you jerk.", "Toxic"), 
  Example("Are you really this stupid", "Toxic"), 
  Example("I will honestly kill you", "Toxic"),  
  Example("yo how are you", "Benign"),  
  Example("I'm curious, how did that happen", "Benign"),  
  Example("Try that again", "Benign"),  
  Example("Hello everyone, excited to be here", "Benign"), 
  Example("I think I saw it first", "Benign"),  
  Example("That is an interesting point", "Benign"), 
  Example("I love this", "Benign"), 
  Example("We should try that sometime", "Benign"), 
  Example("You should go for it", "Benign")
]

inputs = [
  "this game sucks, you suck",  
    "stop being a dumbass",
    "Let's do this once and for all",
  "This is coming along nicely"  
]

response = co.classify(  
    model='large',  
    inputs=inputs,  
    examples=examples)

print(response.classifications)

