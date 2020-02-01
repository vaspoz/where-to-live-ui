pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sshPublisher(failOnError: true, publishers: [
                                          sshPublisherDesc(
                                                  verbose: true,
                                                  transfers: [
                                                          sshTransfer(
                                                                  sourceFiles: "dist/*",
                                                                  remoteDirectory: "where-to-live-ui/dist"
                                                                )
                                                              ]
                                                            )
                                                          ])
                sh 'npm run build'
              }
            }

          }
        }