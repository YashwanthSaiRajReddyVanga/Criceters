from flask import Flask, request, render_template, session

app = Flask(__name__)
app.secret_key = 'super_secret_key'  # Set a secret key for session management

@app.route('/')
def index():
    # Increment the visit count in the session
    session['visit_count'] = session.get('visit_count', 0) + 1
    return render_template('index_session.html', visit_count=session['visit_count'])

if __name__ == '__main__':
    app.run(debug=True)
