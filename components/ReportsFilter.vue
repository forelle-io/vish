<template>
    <div class="filter-wrapper">
        Фильтры
        <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="Заявки на выезд" name="1">
                <div class="timestamp-container">
                    <el-radio v-model="timestamp" label="day">За последние 24 часа</el-radio>
                    <el-radio v-model="timestamp" label="week">За последнюю неделю</el-radio>
                    <el-radio v-model="timestamp" label="month">За последний месяц</el-radio>
                </div>
            </el-collapse-item>
            <el-collapse-item title="Водоем" name="2">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="Песок"></el-checkbox>
                    <el-checkbox label="Option B"></el-checkbox>
                    <el-checkbox label="Option C"></el-checkbox>
                </el-checkbox-group>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="Option A"></el-checkbox>
                    <el-checkbox label="Option B"></el-checkbox>
                    <el-checkbox label="Option C"></el-checkbox>
                </el-checkbox-group>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="Option A"></el-checkbox>
                    <el-checkbox label="Option B"></el-checkbox>
                    <el-checkbox label="Option C"></el-checkbox>
                </el-checkbox-group>
                <el-checkbox-group v-model="checkList">
                    <el-checkbox label="Option A"></el-checkbox>
                    <el-checkbox label="Option B"></el-checkbox>
                    <el-checkbox label="Option C"></el-checkbox>
                </el-checkbox-group>
            </el-collapse-item>
            <el-collapse-item title="Отчеты" name="3">
                <div>Simplify the process: keep operating process simple and intuitive</div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "ReportsFilter",
        data () {
            return {
                timestamp: ''
            }
        }
    }
</script>

<style scoped>
    .timestamp-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>
