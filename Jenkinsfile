node{
    stage("Git Clone"){
        git branch: 'main', credentialsId: 'GIT_HUB_CREDENTIALS', url: 'https://github.com/scott2srikanth1/demo_frontend'
    }
    stage("Docker Build"){

        sh 'docker build -t myfsdcc_frontend .'
        sh 'docker tag myfsdcc_frontend scott2srikanth/myfsdcc_frontend:latest'

    }

     withCredentials([string(credentialsId: 'dockerhub', variable: 'password')]){
         sh 'docker login -u scott2srikanth -p $password'
     }

    stage("Push image to Dockerhub"){
        sh 'docker push scott2srikanth/myfsdcc_frontend:latest'
    }

     stage("Spin-up Kubernetes"){
        sh 'kubectl apply -f frontend.yaml'
    }
}