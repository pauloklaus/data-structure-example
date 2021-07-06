<template>
    <div>
        <h1>Queue</h1>
        <p>Queue new tasks to be processed in a few moments.</p>

        <div class="input">
            <div class="input-error" v-if="error.message" v-html="error.message" />
            <div class="input-task">
                <input ref="task" type="text" maxlength="50" v-model.trim="task" @keypress.enter="add">
            </div>
            <button @click="add">add</button>
        </div>

        <div v-if="queue.hasTask() || processing.status > 0" class="queue">
            <div class="queue-task" v-for="(task, index) in queue.tasks()" :key="index">
                <div class="task-tag">
                    {{ queue.size() - index }}
                    <span v-if="index === 0">tail, last added</span>
                    <span v-else-if="index === queue.size() - 1">next to be processed</span>
                </div>

                <div>{{ task }}</div>
            </div>

            <div class="queue-processing">
                <div class="processing-status" :style="{ width: processing.status + '%' }"></div>
                <div class="processing-task">
                    <div class="task-tag">processing head of queue</div>
                    <div>{{ processing.task }}</div>
                </div>
            </div>
        </div>
        <div v-else class="waiting">Waiting for new tasks...</div>
    </div>
</template>

<script>
import Queue from "@/lib/Structures/Queue";
import error from "@/mixins/error";

export default {
    mixins: [ error ],
    data() {
        return {
            task: "",
            queue: new Queue,
            processing: {
                task: "",
                status: 0
            },
            interval: null,
        }
    },
    created() {
        this.queue.add("Computer");
        this.queue.add("Keyboard");
        this.queue.add("Led monitor");
        this.queue.add("Mouse");

        this.startProcess();
        this.taskFocus();
    },
    methods: {
        taskFocus() {
            this.$nextTick(() => {
                this.$refs.task.focus();
            });
        },
        add() {
            try {
                if (this.task == "")
                    throw new Error("Type a description");
    
                if (this.queue.size() === 4)
                    throw new Error("There are many tasks");
    
                this.clearError();
                this.queue.add(this.task);
                this.task = "";
            }
            catch (error) {
                this.showError(error.message);
            }
            finally {
                this.taskFocus();
            }
        },
        startProcess() {
            this.process();
            this.interval = setInterval(this.process, 1000);
        },
        process() {
            if (this.processing.status > 0)
                this.processing.status -= 20;
            else if (this.processing.status == 0 && this.queue.hasTask()) {
                this.processing.status = 100;
                this.processing.task = this.queue.process();
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
.input-error {
    background-color: white;
    color: var(--tertiary);
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px;
}
.input-task {
    background-color: white;
    flex-grow: 1;
}
.input-task input {
    width: 100%;
}

.queue {
    overflow: hidden;
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: flex-end;
}
.queue-task {
    background-color: var(--status-bar);
    margin-right: 4px;
    width: 20%;
}
.queue-processing {
    position: relative;
    width: 20%;
}

.task-tag {
    font-size: 0.8rem;
    font-weight: bold;
}

.processing-status {
    position: absolute;
    background-color: var(--status-bar);
    height: 100%;
    transition: width .1s;
}

.queue-task,
.processing-task {
    padding: 10px;
    text-overflow: ellipsis;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.waiting {
    padding: 10px;
    text-align: center;
}
</style>
