<template>
    <div>
        <h1>Stack</h1>
        <p>Stack new elements to be immediately processed.</p>

        <div class="input">
            <div class="input-error" v-if="error.message" v-html="error.message" />
            <div class="input-element">
                <input ref="element" type="text" maxlength="50" v-model.trim="element" @keypress.enter="add">
            </div>
            <button @click="add">add</button>
        </div>

        <div v-if="stack.hasElement() || processing.status > 0" class="stack">
            <div v-if="processing.status > 0" class="stack-processing">
                <div class="processing-status" :style="{ width: processing.status + '%' }"></div>
                <div class="processing-element">
                    <div>{{ stack.size() + 1 }} <strong>{{ processing.element }}</strong></div>
                    <div class="element-tag">processing top of stack</div>
                </div>
            </div>

            <div class="stack-element" v-for="(element, index) in stack.elements()" :key="index">
                <div>{{ stack.size() - index }} {{ element }}</div>
                <div class="element-tag">
                    <template v-if="index === 0">next to be processed</template>
                    <template v-else-if="index === stack.size() - 1">bottom, first added</template>
                </div>
            </div>
        </div>
        <div v-else class="waiting">Waiting for new elements...</div>
    </div>
</template>

<script>
import Stack from "@/lib/Structures/Stack";
import error from "@/mixins/error";

export default {
    mixins: [ error ],
    data() {
        return {
            element: "",
            stack: new Stack,
            processing: {
                element: "",
                status: 0
            },
            interval: null,
        }
    },
    created() {
        this.stack.add("Notebook");
        this.stack.add("Keyboard");
        this.stack.add("Mouse");
        this.stack.add("Wifi router");

        this.startProcess();
        this.elementFocus();
    },
    methods: {
        elementFocus() {
            this.$nextTick(() => {
                this.$refs.element.focus();
            });
        },
        add() {
            try {
                if (this.element == "")
                    throw new Error("Type a description");
    
                if (this.stack.size() === 4)
                    throw new Error("There are many elements");
    
                this.clearError();
                this.stack.add(this.element);
                this.element = "";
            }
            catch (error) {
                this.showError(error.message);
            }
            finally {
                this.elementFocus();
            }
        },
        startProcess() {
            this.process();
            this.interval = setInterval(this.process, 1000);
        },
        process() {
            if (this.processing.status > 0)
                this.processing.status -= 20;
            else if (this.processing.status == 0 && this.stack.hasElement()) {
                this.processing.status = 100;
                this.processing.element = this.stack.process();
            }
        }
    },
    beforeDestroy() {
        clearInterval(this.interval);
        this.interval = null;
    },
}
</script>

<style scoped>
h1, p {
    text-align: center;
}

p, .input {
    margin: 0 20px 20px;
}

.input {
    display: flex;
}
.input-element {
    background-color: white;
    flex-grow: 1;
}
.input-element input {
    width: 100%;
}
.input-error {
    background-color: white;
    color: var(--tertiary);
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px;
}

.stack {
    overflow-y: auto;
    list-style-type: none;
    padding: 0;
}
.stack-element {
    background-color: var(--status-bar);
    margin-top: 4px;
}

.stack-processing {
    position: relative;
}
.processing-status {
    position: absolute;
    background-color: var(--status-bar);
    height: 100%;
    transition: width .1s;
}

.stack-element,
.processing-element {
    padding: 10px;
    text-overflow: ellipsis;
    display: flex;
    justify-content: space-between;
}

.element-tag {
    font-size: 0.8rem;
    font-weight: bold;
}

.waiting {
    padding: 10px;
    text-align: center;
}
</style>
