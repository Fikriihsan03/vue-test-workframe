<template>
    <div class="va-table-responsive">
        <table class="va-table">
            <thead>
                <tr>
                    <th v-for="header in headers" :key="header">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <slot name="body" :items="paginatedItems"></slot>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface IProps {
    headers: []
    items: []
    page: number
    perPage: number
}

const props = defineProps<IProps>()


const paginatedItems = computed(
    () => {
        const start = (props.page - 1) * props.perPage;
        const end = start + props.perPage;
        return props.items.slice(start, end);
    }
)



</script>
<style scoped>
.va-table-responsive {
    width: 100%;
    overflow-x: auto;
}

.va-table {
    width: 100%;
    border-collapse: collapse;
}

/* .va-table th,
.va-table td {
    padding: 8px;
    text-align: left;
    border: 1px solid #ddd;
} */
</style>