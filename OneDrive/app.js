module.exports = app =>{
	//beforeStart是egg声明周期函数，启动应用时执行
	app.beforeStart(async function(){
		//创建数据表的方法
		await app.model.sync({})
	})
}