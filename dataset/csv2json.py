import json
import pandas as pd

# Read the CSV file
input_file_path = './mushroom.csv'
output_file_path = './mushroom_descrete.json'

# Load the data
df = pd.read_csv(input_file_path)

# Remove the specified columns
columns_to_remove = ['cap-diameter', 'stem-height', 'stem-width']
df = df.drop(columns=columns_to_remove, errors='ignore')

import ipdb; ipdb.set_trace()

# Aggregate the data by counting the occurrences of each unique row
aggregated_df = df.groupby(list(df.columns)).size().reset_index(name='count')
data_list = aggregated_df.to_dict(orient='records')
# Save the data to a JSON file
with open(output_file_path, 'w') as json_file:
    json.dump(data_list, json_file, indent=4)

# Save the aggregated data to a new CSV file
# aggregated_df.to_csv(output_file_path, index=False)

print(f"Aggregated data saved to {output_file_path}")
