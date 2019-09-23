import hudson.*
import groovy.json.JsonSlurperClassic
import groovy.json.JsonOutput

def response

node('master') {
    stage('Clone sources') {
        git branch: 'new-branch', url: 'https://github.com/igorkokotko/jenkins-test.git'
    }
    stage('Monitor package.json') {
        def latestCommit = sh(returnStdout: true, script: "git log --pretty=format:'%H' -1")
        def pullRequestLatestCommit = sh(returnStdout: true, script: "git log -n 1 origin/master --pretty=format:'%H'")

        try {
            def packageJsonChanged = sh(returnStdout: true, script: "git diff ${latestCommit} ${pullRequestLatestCommit} --name-only | grep package.json")
            def dockerFilePath = pwd() + '/Dockerfile'

            if(packageJsonChanged) {
                File dockerFile = new File(dockerFilePath)
                def dockerText = dockerFile.getText('UTF-8')
                
                String original = 'FROM node:8.11.1'
                String replaceText = 'FROM base'
                def modifiedDockerText = dockerText.replaceAll(original, replaceText)
                
                dockerFile.write(modifiedDockerText);
                
                sh 'cat Dockerfile'
            } else {
                echo 'not changed'
            }
        } catch (Exception e) {
            println("Exception: ${e}")
        }

    }
}

