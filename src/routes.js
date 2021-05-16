import Home from './components/Home.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Footer from './components/Footer.vue';
import AddUser from './components/users/AddUser.vue'
import UsersList from './components/users/UsersList.vue'
import ShowUsers from './components/users/ShowUsers.vue'
import EditUser from './components/users/EditUser.vue'
import Login from './components/auth/Login.vue'
import Register from './components/auth/Register.vue'
import Products from './components/Products.vue';

export const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/header', name: 'Header', component: Header },
    { path: '/about', name: 'About', component: About },
    { path: '/footer', name: 'Footer', component: Footer },
    { path: '/users-list', name: 'UsersList', component: UsersList },
    { path: '/show-user/:id', name: 'ShowUsers', component: ShowUsers },
    { path: '/edit-user/:id', name: 'EditUser', component: EditUser },
    { path: '/add-user', name: 'AddUser', component: AddUser },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/products', name: 'Products', component: Products },
]