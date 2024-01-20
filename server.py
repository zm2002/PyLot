from flask import Flask, jsonify
# <call custom parking API here>

app = Flask(__name__)

@app.route('/')
def getCarData():
    return "Welcome to the Banana Spot app!"

@app.route('/get_parking_data', methods=['GET'])
def get_parking_data():
    # Your OpenCV logic to get the parking data
    cars_entering = 10  # Replace with actual data
    cars_leaving = 5    # Replace with actual data

    data = {'cars_entering': cars_entering, 'cars_leaving': cars_leaving}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
