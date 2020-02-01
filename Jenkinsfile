pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        sh 'ssh -i aliyah_key.pem ec2-user@35.159.30.173 ll'
        sh 'scp -i aliyah_key.pem /var/lib/jenkins/workspace/where-to-live-ui_master/dist/* ec2-user@35.159.30.173:where-to-live-ui/dist'
        sh 'npm run build'
        sshPublisher(alwaysPublishFromMaster: true)
      }
    }

    stage('deploy') {
      steps {
        sh 'scp -i /home/ec2-user/aliyah_key.pem /var/lib/jenkins/workspace/where-to-live-ui_master/dist/* ec2-user@35.159.30.173:where-to-live-ui/dist'
      }
    }

  }
}