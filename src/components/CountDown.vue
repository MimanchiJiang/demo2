<template>
    <div>
        <div class="CountDownWrapper">
            {{ dateFormat(date) }}({{ seconds }})
        </div>

    </div>
</template>


<script>
export default {
    data() {
        return {
            date: new Date(),
            seconds: 60
        }
    },
    methods: {
        dateFormat(time) {
            var date = new Date(time);
            var year = date.getFullYear();
            var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
            var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
            var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
            var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
            // 拼接
            return year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        }
    },
    mounted() {
        //显示当前日期时间
        let _this = this// 声明一个变量指向Vue实例this，保证作用域一致
        this.timer = setInterval(() => {
            _this.date = new Date(); // 修改数据date
        }, 1000)
        this.timer2 = setInterval(() => {
            _this.seconds -= 1
        }, 1000)
    },
    beforeDestroy() {
        if (this.timer) {
            clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
        }
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CountDownWrapper {
    margin-left: 28px;
    font-size: 20px;
    margin-right: 25px;
    text-align: center;
    background: white;
}
</style>