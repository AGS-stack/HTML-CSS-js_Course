from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Configure MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="aB@noub%123",
    database="tododb"
)

@app.route('/tasks', methods=['GET', 'POST'])
def manage_tasks():
    cursor = db.cursor(dictionary=True)
    if request.method == 'POST':
        try:
            new_task = request.json['task']
            cursor.execute("INSERT INTO tasks (task) VALUES (%s)", (new_task,))
            print(new_task)
            db.commit()
            return jsonify({'message': 'Task added successfully!'}), 201
        except mysql.connector.Error as err:
            return jsonify({'error': str(err)}), 500
    else:
        cursor.execute("SELECT * FROM tasks")
        tasks = cursor.fetchall()
        return jsonify(tasks)

@app.route('/tasks/<int:id>', methods=['PUT', 'DELETE'])
def update_delete_task(id):
    cursor = db.cursor()
    if request.method == 'PUT':
        try:
            updated_task = request.json['task']
            cursor.execute("UPDATE tasks SET task = %s WHERE id = %s", (updated_task, id))
            db.commit()
            return jsonify({'message': 'Task updated successfully!'})
        except mysql.connector.Error as err:
            return jsonify({'error': str(err)}), 500
    elif request.method == 'DELETE':
        try:
            cursor.execute("DELETE FROM tasks WHERE id = %s", (id,))
            db.commit()
            return jsonify({'message': 'Task deleted successfully!'})
        except mysql.connector.Error as err:
            return jsonify({'error': str(err)}), 500

if __name__ == '__main__':
    app.run(debug=True)
