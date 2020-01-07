<template>
  <div class="report-wrapper">
    <div class="report-header">
      <el-row type="flex" align="top" justify="space-between">
        <el-col class="report-header-left-block" :span="12">
          <el-avatar
            shape="square"
            :size="40"
            fit="fill"
            class="report-header-left-block-avatar"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
          <div class="report-header-left-block-text">
            <div class="report-header-left-block-text-author">
              <span>Иван Иванов</span>
            </div>
            <div class="report-header-left-block-text-location">
              <span>Выезд</span><span> · </span><span>Волга</span>
            </div>
          </div>
        </el-col>
        <el-col class="report-header-right-block" :span="12">
          <div class="report-header-right-block-text">
            <div>...</div>
            <div class="report-header-right-time">
              <span>
                24 минуты назад
              </span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="report-media">
      <img src="/map.png" alt="">
    </div>
    <div class="report-info">
      <div class="report-info-item">
        <span class="app-report-icon-calendar"></span>
        <span>Дата выезда - 25.09.2019</span>
      </div>
      <div class="report-info-item">
        <span class="app-report-icon-auto"></span>
        <span>Транспорт - 2 места</span>
      </div>
    </div>
    <div class="report-content">
      <h2 class="report-content-header">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered
      </h2>
      <p class="report-content-text">
        All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
        It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
      </p>
    </div>
    <div class="report-tags">
      <span class="report-tags-item">Щука</span>
      <span class="report-tags-item">Судак</span>
    </div>
    <div class="report-footer">
      <div class="report-footer-buttons">
        <i class="el-icon-view"></i><span>15</span>
        <i class="el-icon-chat-round"></i><span>8</span>
        <i class="el-icon-collection-tag"></i><span>8</span>
      </div>
      <div class="report-footer-request">
        <el-button type="primary" icon="el-icon-success">Заявка принята</el-button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ReportPreview"
    }
</script>

<style scoped>
  .report-wrapper {
    width: 600px;
    margin-bottom: 32px;
  }
  .report-header {
    margin-bottom: 25px;
  }
  .report-header-left-block {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .report-header-right-block-text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }
  .report-header-left-block-text-author {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #1B263D;
  }
  .report-header-left-block-text-location {
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #58627A;
  }
  .report-header-left-block-avatar {
    margin-right: 16px;
  }
  .report-header-right-time {
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #58627A;
  }
  .report-media {
    margin-bottom: 25px;
  }
  .report-info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 25px;
  }
  .report-info-item {
    margin-right: 90px;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #58627A;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .report-content {
    margin-bottom: 30px;
  }
  .report-content-header {
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #1B263D;
    margin-bottom: 16px;
  }
  .report-content-text {
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    color: #1B263D;
  }
  .report-tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 24px;
  }
  .report-tags-item {
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    color: #58627A;
    padding: 6px 12px;
    background-color: #F5F6FA;
    margin-right: 6px;
    border-radius: 6px;
  }
  .report-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .report-footer-buttons {
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #666F86;
  }
  .report-footer-buttons > i {
    margin-right: 10px;
  }
  .report-footer-buttons > span {
    margin-right: 24px;
  }
</style>
