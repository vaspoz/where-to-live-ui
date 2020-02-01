pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('deploy') {
      steps {
        sshPublisher(failOnError: true, publishers: [
                                                                                                                                                                            sshPublisherDesc(
                                                                                                                                                                                                              configName: "theserver",
                                                                                                                                                                                                              verbose: true,
                                                                                                                                                                                                              transfers: [
                                                                                                                                                                                                                                                sshTransfer(
                                                                                                                                                                                                                                                                                  sourceFiles: "dist/*",
                                                                removePrefix: "dist"
                                                                                                                                                                                                                                                                                )
                                                                                                                                                                                                                                                                              ]
                                                                                                                                                                                                                                                                            )
                                                                                                                                                                                                                                                                          ])
              }
            }

          }
        }