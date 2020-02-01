pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sshPublisher(failOnError: true, publishers: [
                                                                                  sshPublisherDesc(
                                                                                                  configName: "theserver",
                                                                                                  verbose: true,
                                                                                                  transfers: [
                                                                                                                  sshTransfer(
                                                                                                                                  sourceFiles: "dist/*"
                                                                                                                                )
                                                                                                                              ]
                                                                                                                            )
                                                                                                                          ])
                sh 'npm run build'
              }
            }

          }
        }