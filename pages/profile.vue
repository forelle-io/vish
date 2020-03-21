<template>
    <div class="page-profile">
        <vish-row justify="space-between" align-items="flex-start">
            <div>

            </div>
            <div>
                <report-preview/>
                <report-preview/>
                <report-preview/>
                <report-preview/>
                <report-preview/>
                <report-preview/>
            </div>
            <div>
                <reports-filter/>
            </div>
        </vish-row>
    </div>
</template>

<script>
    import ReportPreview from "../components/ReportPreview";
    import ReportsFilter from '../components/ReportsFilter'
    export default {
        name: "profile",
        components: {
            ReportPreview,
            ReportsFilter
        }
    }
</script>