<template>
    <div id="app">
        <div id="header">
            <div><strong>Data Structure Example</strong></div>
            <nav>
                <router-link v-for="(option, index) in options" :key="index" :to="option.route" active-class="nav-active">{{ option.title }}</router-link>
            </nav>
        </div>
        <div id="content">
            <router-view />
        </div>
        <div id="footer">
            <a href="https://pauloklaus.com.br">pauloklaus.com.br</a> {{ (new Date()).getFullYear() }} &bullet; <a href="https://github.com/pauloklaus/data-structure-example">github.com/pauloklaus/data-structure-example</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [
                { route: "queue", title: "Queue" },
                { route: "stack", title: "Stack" },
                { route: "sort", title: "Sort" },
            ]
        }
    }
}
</script>

<style>
#app {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100vh;
    flex-direction: column;
    width: 95%;
    margin: 0 auto;
}

#header {
    color: white;
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1.3rem;
    padding: 10px 0 10px 0;
}
#header div {
    text-shadow: 0 0 10px black;
}
#header a:not(:first-child) {
    padding-left: 10px;
}

#content {
    background-color: var(--content);
    border-radius: 10px;
    color: white;
    width: 100%;
    overflow: hidden;
}
#content a:any-link {
    color: white;
}

#footer {
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px 0 5px 0;
    text-align: center;
}

#header a,
#footer a {
    color: white;
    text-decoration: none;
}

.nav-active {
    font-weight: bold;
}

@media screen and (min-width: 780px) {
    #app {
        width: 80%;
    }
}
</style>
