import csv
import json

def csv_to_json(csv_file_path, json_file_path):
    # Open the CSV file
    with open(csv_file_path, mode='r', newline='', encoding='utf-8') as csv_file:
        # Read the CSV file with semicolon delimiter
        csv_reader = csv.DictReader(csv_file, delimiter=';')
        
        # Convert the CSV data to a list of dictionaries
        data_list = [row for row in csv_reader]

    # Write the list of dictionaries to a JSON file
    with open(json_file_path, 'w', encoding='utf-8') as json_file:
        json.dump(data_list, json_file, indent=4)

if __name__ == "__main__":
    csv_file_path = 'primary_data.csv'  # Replace with your CSV file path
    json_file_path = 'primary_data.json'  # Replace with your desired JSON output file path

    csv_to_json(csv_file_path, json_file_path)
    print(f"CSV file {csv_file_path} has been converted to JSON file {json_file_path}")
