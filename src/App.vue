<template>
    <div id="app">
        <div class="header">
            <div><strong>Data Structure Examples</strong></div>
            <nav>
                <router-link to="queue" active-class="nav-active">Queue</router-link>
            </nav>
        </div>
        <div class="content">
            <router-view />
        </div>
        <div class="footer">
            <a href="https://pauloklaus.com.br">pauloklaus.com.br</a> {{ (new Date()).getFullYear() }} &bullet; <a href="https://github.com/pauloklaus/data-structure-examples">github.com/pauloklaus/data-structure-examples</a>
        </div>
    </div>
</template>

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

#app .header {
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    font-size: 1.3rem;
    padding: 10px 0 10px 0;
}

#app .content {
    background-color: var(--content);
    border-radius: 10px;
    color: white;
    width: 100%;
    overflow: hidden;
}

#app .footer {
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 10px 0 5px 0;
}

#app .header a,
#app .footer a {
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
