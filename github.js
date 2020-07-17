class Github{
    constructor(){
        this.client_id = '30dc4f547bc16fbc6edb';
        this.client_secret = '9acc100d445e87ce47df62929ea63252eba89eb4';
        this.repos_count=5;
        this.repos_sort='created: asc'
    }

async  getUser(user) {
   const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

   const profile = await profileResponse.json();
   const repos = await reposResponse.json();

    return {profile, repos}
    }
}