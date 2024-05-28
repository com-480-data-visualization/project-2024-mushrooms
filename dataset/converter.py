import json

# Mapping dictionaries
cap_shape_mapping = {
    "b": "bell",
    "c": "conical",
    "x": "convex",
    "f": "flat",
    "s": "sunken",
    "p": "spherical",
    "o": "others"
}

cap_surface_mapping = {
    "i": "fibrous",
    "g": "grooves",
    "y": "scaly",
    "s": "smooth",
    "h": "shiny",
    "l": "leathery",
    "k": "silky",
    "t": "sticky",
    "w": "wrinkled",
    "e": "fleshy"
}

color_mapping = {
    "n": "brown",
    "b": "buff",
    "g": "gray",
    "r": "green",
    "p": "pink",
    "u": "purple",
    "e": "red",
    "w": "white",
    "y": "yellow",
    "l": "blue",
    "o": "orange",
    "k": "black"
}

does_bruise_bleed_mapping = {
    "t": "bruises-or-bleeding",
    "f": "no"
}

gill_attachment_mapping = {
    "a": "adnate",
    "x": "adnexed",
    "d": "decurrent",
    "e": "free",
    "s": "sinuate",
    "p": "pores",
    "f": "none",
    "?": "unknown"
}

gill_spacing_mapping = {
    "c": "close",
    "d": "distant",
    "f": "none"
}

root_mapping = {
    "b": "bulbous",
    "s": "swollen",
    "c": "club",
    "u": "cup",
    "e": "equal",
    "z": "rhizomorphs",
    "r": "rooted"
}

veil_type_mapping = {
    "p": "partial",
    "u": "universal"
}

has_ring_mapping = {
    "t": "ring",
    "f": "none"
}

ring_type_mapping = {
    "c": "cobwebby",
    "e": "evanescent",
    "r": "flaring",
    "g": "grooved",
    "l": "large",
    "p": "pendant",
    "s": "sheathing",
    "z": "zone",
    "y": "scaly",
    "m": "movable",
    "f": "none",
    "?": "unknown"
}

habitat_mapping = {
    "g": "grasses",
    "l": "leaves",
    "m": "meadows",
    "p": "paths",
    "h": "heaths",
    "u": "urban",
    "w": "waste",
    "d": "woods"
}

season_mapping = {
    "s": "spring",
    "u": "summer",
    "a": "autumn",
    "w": "winter"
}

# Function to decode values
def decode_value(value, mapping):
    if value:
        decoded_values = [mapping[v] for v in value if v in mapping]
        return f'[{", ".join(decoded_values)}]'
    return value

# Function to process a single mushroom entry
def process_mushroom(mushroom):
    mushroom['cap-shape'] = decode_value(mushroom.get('cap-shape', []), cap_shape_mapping)
    mushroom['Cap-surface'] = decode_value(mushroom.get('Cap-surface', []), cap_surface_mapping)
    mushroom['cap-color'] = decode_value(mushroom.get('cap-color', []), color_mapping)
    mushroom['does-bruise-or-bleed'] = decode_value(mushroom.get('does-bruise-or-bleed', []), does_bruise_bleed_mapping)
    mushroom['gill-attachment'] = decode_value(mushroom.get('gill-attachment', []), gill_attachment_mapping)
    mushroom['gill-spacing'] = decode_value(mushroom.get('gill-spacing', []), gill_spacing_mapping)
    mushroom['gill-color'] = decode_value(mushroom.get('gill-color', []), color_mapping)
    mushroom['stem-root'] = decode_value(mushroom.get('stem-root', []), root_mapping)
    mushroom['stem-surface'] = decode_value(mushroom.get('stem-surface', []), cap_surface_mapping)
    mushroom['stem-color'] = decode_value(mushroom.get('stem-color', []), color_mapping)
    mushroom['veil-type'] = decode_value(mushroom.get('veil-type', []), veil_type_mapping)
    mushroom['veil-color'] = decode_value(mushroom.get('veil-color', []), color_mapping)
    mushroom['has-ring'] = decode_value(mushroom.get('has-ring', []), has_ring_mapping)
    mushroom['ring-type'] = decode_value(mushroom.get('ring-type', []), ring_type_mapping)
    mushroom['Spore-print-color'] = decode_value(mushroom.get('Spore-print-color', []), color_mapping)
    mushroom['habitat'] = decode_value(mushroom.get('habitat', []), habitat_mapping)
    mushroom['season'] = decode_value(mushroom.get('season', []), season_mapping)
    return mushroom

# Load the JSON data
with open('primary_data.json', 'r') as file:
    data = json.load(file)

# Process each mushroom entry
processed_data = [process_mushroom(mushroom) for mushroom in data]

# Save the processed data to a new JSON file
with open('processed_mushroom_data.json', 'w') as file:
    json.dump(processed_data, file, indent=4)

print("Data processing complete. Processed data saved to 'processed_mushroom_data.json'.")
