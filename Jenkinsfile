pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm run build'
        sh 'rm -rf dist/'
      }
    }

  }
}