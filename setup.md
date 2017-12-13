Here are the parameters you should set up with your Alexa Skill:

# Intent Schema

```
{
  "intents": [
    {
      "slots": [
        {
          "name": "Food",
          "type": "FOOD"
        },
        {
          "name": "Calories",
          "type": "CALORIES"
        }
      ],
      "intent": "GetRecipe"
    },
    {
      "intent": "ExitApp"
    }
  ]
}
```

# Slot types

* Type: `FOOD`

Examples: 

```
chicken
pork
berries
```

# Sample Utterances

```
GetRecipe give me a recipe for {Food} under {Calories} calories
GetRecipe I have {Food} and want a recipe under {Calories} calories
GetRecipe I have {Food}
ExitApp bye
```