<template>
    <div class="insertion-sort">
        <h1>Sort</h1>
        <p>Generate random numbers and arrange them with specific algorithm.</p>

        <div class="input">
            <button :disabled="processing" @click="generate">Generate</button>
            <div class="input-size">
                <input ref="size" type="phone" maxlength="4" v-model.trim="size" @keypress.enter="generate">
            </div>
            <div class="input-append">Numbers</div>
        </div>

        <div class="result" v-if="numbers.length">
            <div v-for="(number, index) in numbers" :key="index">{{ number }}</div>
        </div>

        <template v-if="numbers.length">
            <h2>Sort algorithm</h2>

            <div class="start">
                <button ref="sort" :disabled="processing" @click="start('selectionSort')">Selection</button>
                <button :disabled="processing" @click="start('insertionSort')">Insertion</button>
            </div>

            <div v-if="inOrder.length" class="result">
                <div v-for="(number, index) in inOrder" :key="index">{{ number }}</div>
            </div>

            <div v-if="inOrder.length" class="elapsed-time">generated in {{ elapsedTime }} sec</div>
        </template>
    </div>
</template>

<script>
import selectionSort from "@/lib/Sort/Selection";
import insertionSort from "@/lib/Sort/Insertion";

export default {
    data() {
        return {
            size: "1000",
            processing: false,
            numbers: [],
            inOrder: [],
            elapsedTime: 0,
        }
    },
    created() {
        this.focusOn("size");
    },
    methods: {
        focusOn(element) {
            this.$nextTick(() => {
                this.$refs[element].focus();
            });
        },
        clearOrder() {
            this.inOrder = [];
            this.elapsedTime = 0;
        },
        clearEnv() {
            this.numbers = [];
            this.clearOrder();
        },
        generate() {
            try {
                this.processing = true;

                if (!/^[0-9]+$/.test(this.size))
                    this.size = "1000";
                
                let size = parseInt(this.size);

                this.clearEnv();

                for (let number = 0; number < size; number++)
                    this.numbers.push(Math.floor((Math.random() * 1000) + 1));

                this.focusOn("sort");
            }
            finally {
                this.processing = false;
            }
        },
        chooseAlgorithm(algorithm) {
            switch (algorithm) {
                case "insertionSort":
                    return insertionSort;

                case "selectionSort":
                default:
                    return selectionSort;
            }
        },
        start(algorithm) {
            try {
                this.processing = true;
                this.clearOrder();
                const algorithmMethod = this.chooseAlgorithm(algorithm);

                const startTime = new Date();
                this.inOrder = algorithmMethod([...this.numbers]);
                this.elapsedTime = ((new Date()) - startTime) / 1000;

                this.focusOn("size");
            }
            finally {
                this.processing = false;
            }
        }
    }
}
</script>

<style scoped>
.insertion-sort {
    padding: 20px;
}
h1, h2, p {
    text-align: center;
}
h2, p {
    margin-bottom: 20px;
}

.input {
    display: flex;
    width: 100%;
    justify-content: center;
}
.input-size input {
    text-align: center;
    width: 50px;
}
.input-append {
    color: var(--dark);
    background-color: white;
    font-size: 1.2rem;
    padding: 5px;
}

.result {
    display: flex;
    margin: 20px 0;
    overflow-x: auto;
}

.result div:not(first-child):not(last-child) {
    padding: 0 10px;
    font-size: 2rem;
}

.start {
    text-align: center;
}
.start button {
    margin: 0 4px;
    padding: 5px 10px;
    background-color: var(--secondary);
}

.elapsed-time {
    text-align: center;
}
</style>
