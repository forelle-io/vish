<template>
    <el-row>
        <el-col :span="17">
            Отчеты
        </el-col>
        <el-col :span="7">
            Фильтры
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Заявки на выезд" name="1">
                    <div>Consistent with real life that the users are used to</div>
                </el-collapse-item>
                <el-collapse-item title="Водоем" name="2">
                    <div>Operation feedback: enable</div>
                </el-collapse-item>
                <el-collapse-item title="Отчеты" name="3">
                    <div>Simplify the process: keep operating process simple and intuitive</div>
                </el-collapse-item>
            </el-collapse>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "reports"
    }
</script>

<style scoped>

</style>
