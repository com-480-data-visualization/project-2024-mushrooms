import json


# Load the JSON data
with open('./mushroom_descrete.json', 'r') as file:
    data = json.load(file)

# Define the mapping
mapping = {
    "class": {"e": "Edible", "p": "Poisonous"},
    "cap-shape": {"b": "Bell", "c": "Conical", "x": "Convex", "f": "Flat", "k": "Knobbed", "s": "Sunken"},
    "cap-surface": {"f": "Fibrous", "g": "Grooves", "y": "Scaly", "s": "Smooth"},
    "cap-color": {"n": "Brown", "b": "Buff", "c": "Cinnamon", "g": "Gray", "r": "Green", "p": "Pink", "u": "Purple", "e": "Red", "w": "White", "y": "Yellow"},
    "does-bruise-or-bleed": {"t": "Bruises", "f": "No"},
    "gill-attachment": {"a": "Attached", "d": "Descending", "f": "Free", "n": "Notched"},
    "gill-color": {"k": "Black", "n": "Brown", "b": "Buff", "h": "Chocolate", "g": "Gray", "r": "Green", "o": "Orange", "p": "Pink", "u": "Purple", "e": "Red", "w": "White", "y": "Yellow"},
    "stem-color": {"n": "Brown", "b": "Buff", "c": "Cinnamon", "g": "Gray", "o": "Orange", "p": "Pink", "e": "Red", "w": "White", "y": "Yellow"},
    "has-ring": {"t": "Yes", "f": "No"},
    "ring-type": {"c": "Cobwebby", "e": "Evanescent", "f": "Flaring", "l": "Large", "n": "None", "p": "Pendant", "s": "Sheathing", "z": "Zone"},
    "habitat": {"g": "Grasses", "l": "Leaves", "m": "Meadows", "p": "Paths", "u": "Urban", "w": "Waste", "d": "Woods"},
    "season": {"a": "Autumn", "s": "Spring", "u": "Summer", "w": "Winter"}
}


# Transform the data
for entry in data:
    for key, sub_map in mapping.items():
        try:
            if key in entry:
                entry[key] = sub_map[entry[key]]
        except KeyError:
            print(f"KeyError: {entry[key]} in {key}")
            exit

# Save the transformed data
with open('./mushroom_full.json', 'w') as file:
    json.dump(data, file, indent=4)

print("Transformation complete. The data has been saved to 'mushroom_transformed.json'.")