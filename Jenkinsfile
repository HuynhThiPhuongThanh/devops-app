pipeline {
    agent any

    stages {
stage('Install') {
    steps {
        sh 'docker run --rm -v $PWD:/app -w /app node:18 npm install'
    }
}

stage('Lint') {
    steps {
        sh 'docker run --rm -v $PWD:/app -w /app node:18 npm run lint'
    }
}

        stage('Build Docker') {
            steps {
                sh 'docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh 'docker run -d -p 3000:3000 devops-app'
            }
        }
    }
}