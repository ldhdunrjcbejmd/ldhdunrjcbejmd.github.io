// 获取你定义的存放图表的 DOM 容器
var chartDom = document.getElementById('sankey');

// 使用ECharts初始化这个DOM容器，返回实例对象（myChart）
var chordmyChart = echarts.init(chartDom);

const chordoption = {

  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  // grid: {
  //   top: '10%',
  //   bottom: '10%',
  //   left: '20%',
  //   right: '20%', // 调整绘图区域的宽度和高度
  //   containLabel: true
  // },
  symbol: 'circle', // 设置节点形状为圆形
  symbolSize: 25, // 设置节点大小为 8 像素
  series: [
    {
      data: [
        { name: '怀古' },
        { name: '感慨' },
        { name: '兴亡' },
        { name: '离别' },
        { name: '相思' },
        { name: '惆怅' },
        { name: '怀念' },
        { name: '悲凉' },
        { name: '无奈' },
        { name: '凄凉' },
        { name: '美好' },
        { name: '矛盾' },
        { name: '曲折' },
        { name: '赞美' },
        { name: '英雄' },
        { name: '咏物' },
        { name: '沉痛' },
        { name: '向往' },
        { name: '封建' },
        { name: '批评' },
        { name: '眷恋' },
        { name: '赵长卿' },
        { name: '张耒' },
        { name: '解缙' },
        { name: '赵?' },
        { name: '林则徐' },
        { name: '史可法' },
        { name: '蒋景祁' },
        { name: '王月' },
        { name: '徐渭' },
        { name: '周邦彦' },
        { name: '卞赛' },
        { name: '吴均' },
        { name: '孙光宪' },
        { name: '金銮' },
        { name: '萧道成' },
        { name: '马光祖' },
        { name: '敖英' },
        { name: '赵鼎' },
        { name: '王暕' },
        { name: '吴绮' },
        { name: '朱敦儒' },
        { name: '萧绎' },
        { name: '崔嫣然' },
        { name: '夏承焘' },
        { name: '顾璘' },
        { name: '于右任' },
        { name: '陈恭尹' },
        { name: '王勃' },
        { name: '苏泂' },
        { name: '马致远' },
        { name: '凌蒙初' },
        { name: '萧子显' },
        { name: '刘禹锡' },
        { name: '东吴童谣' },
        { name: '施惠' },
        { name: '王僧孺' },
        { name: '刘勰' },
        { name: '曾极' },
        { name: '郑梦周' },
        { name: '庾肩吾' },
        { name: '阮大铖' },
        { name: '周亮工' },
        { name: '胡炳文' },
        { name: '刘基' },
        { name: '史惟圆' },
        { name: '许自昌' },
        { name: '苏轼' },
        { name: '陆宗窐' },
        { name: '李璟' },
        { name: '王微' },
        { name: '余怀' },
        { name: '萧纲' },
        { name: '查德卿' },
        { name: '高濂' },
        { name: '钱大昕' },
        { name: '陈白尘、董健' },
        { name: '沈约' },
        { name: '郑孝胥' },
        { name: '沙宛' },
        { name: '谢惠连' },
        { name: '萧子范' },
        { name: '杜文澜' },
        { name: '彭孙贻' },
        { name: '张怡' },
        { name: '张之洞' },
        { name: '司空曙' },
        { name: '叶梦得' },
        { name: '汪元量' },
        { name: '王珪' },
        { name: '纳兰性德' },
        { name: '张先' },
        { name: '罗隐' },
        { name: '杨备' },
        { name: '王筠' },
        { name: '刘秩' },
        { name: '袁枚' },
        { name: '王士禛' },
        { name: '颜延之' },
        { name: '朱一是' },
        { name: '赵执信' },
        { name: '张昪' },
        { name: '曹亮武' },
        { name: '谢混' },
        { name: '郑燮' },
        { name: '王友亮' },
        { name: '吴伟业' },
        { name: '文天祥' },
        { name: '曹雪芹' },
        { name: '曹景宗' },
        { name: '辛弃疾' },
        { name: '张可久' },
        { name: '韦庄' },
        { name: '徐[火勃]' },
        { name: '吴敬梓' },
        { name: '鲍令晖' },
        { name: '欧阳炯' },
        { name: '林之夏' },
        { name: '高启' },
        { name: '冯延巳' },
        { name: '罗宗强' },
        { name: '王昌龄' },
        { name: '张鎡' },
        { name: '陈子龙' },
        { name: '赵函' },
        { name: '陶宗仪' },
        { name: '李白' },
        { name: '何逊' },
        { name: '许浑' },
        { name: '李纲' },
        { name: '萨都剌' },
        { name: '张坚' },
        { name: '潘阆' },
        { name: '范师孟' },
        { name: '卓人月' },
        { name: '周济' },
        { name: '马守贞' },
        { name: '汤显祖' },
        { name: '周紫芝' },
        { name: '邓剡' },
        { name: '吴兆' },
        { name: '白朴' },
        { name: '李商隐' },
        { name: '谢朓' },
        { name: '柳如是' },
        { name: '邢昉' },
        { name: '李清照' },
        { name: '李煜' },
        { name: '郭祥正' },
        { name: '刘克庄' },
        { name: '陈沂' },
        { name: '许有壬' },
        { name: '钱惟演' },
        { name: '林古度' },
        { name: '鲍照' },
        { name: '朱孟震' },
        { name: '古贺朴' },
        { name: '乔吉' },
        { name: '王冕' },
        { name: '杨宛' },
        { name: '杨万里' },
        { name: '李益' },
        { name: '崔铣' },
        { name: '李延寿' },
        { name: '周兴嗣' },
        { name: '高蟾' },
        { name: '朱彝尊' },
        { name: '王安石' },
        { name: '庾信' },
        { name: '王奕' },
        { name: '乐府歌辞' },
        { name: '公牍文' },
        { name: '七言古体诗' },
        { name: '五言律绝' },
        { name: '五言律诗' },
        { name: '七言律诗' },
        { name: '诗文集' },
        { name: '五言古体诗' },
        { name: '论说文' },
        { name: '别集' },
        { name: '散曲集' },
        { name: '笔记文' },
        { name: '文集' },
        { name: '散曲' },
        { name: '传状文' },
        { name: '剧曲' },
        { name: '赋' },
        { name: '诗集' },
        { name: '七言律绝' },
        { name: '书牍文' },
        { name: '诗' },
        { name: '哀祭文' },
        { name: '小说' },
        { name: '五言排律' },
        { name: '杂言诗' },
        { name: '词' },
        { name: '乐府诗' },
        { name: '散文' },
        { name: '古体诗' },
        { name: '骈体文' },
        { name: '文' },

      ],
      links: [
        { source: '封建', target: '李延寿', value: 1 },
        { source: '眷恋', target: '沈约', value: 1 },
        { source: '封建', target: '周兴嗣', value: 1 },
        { source: '批评', target: '刘勰', value: 1 },
        { source: '封建', target: '萧子显', value: 1 },
        { source: '赞美', target: '吴敬梓', value: 1 },
        { source: '兴亡', target: '庾信', value: 1 },
        { source: '曲折', target: '袁枚', value: 1 },
        { source: '咏物', target: '袁枚', value: 1 },
        { source: '怀古', target: '王友亮', value: 1 },
        { source: '咏物', target: '王友亮', value: 1 },
        { source: '曲折', target: '谢朓', value: 1 },
        { source: '怀古', target: '韦庄', value: 1 },
        { source: '无奈', target: '李煜', value: 1 },
        { source: '矛盾', target: '李煜', value: 1 },
        { source: '惆怅', target: '李清照', value: 1 },
        { source: '怀古', target: '邓剡', value: 1 },
        { source: '感慨', target: '邓剡', value: 1 },
        { source: '兴亡', target: '邓剡', value: 1 },
        { source: '凄凉', target: '邓剡', value: 1 },
        { source: '美好', target: '林之夏', value: 1 },
        { source: '向往', target: '林之夏', value: 1 },
        { source: '曲折', target: '阮大铖', value: 1 },
        { source: '怀念', target: '曾极', value: 1 },
        { source: '赞美', target: '曾极', value: 1 },
        { source: '凄凉', target: '敖英', value: 1 },
        { source: '悲凉', target: '李商隐', value: 1 },
        { source: '眷恋', target: '乐府歌辞', value: 1 },
        { source: '凄凉', target: '王珪', value: 1 },
        { source: '凄凉', target: '陈恭尹', value: 1 },
        { source: '兴亡', target: '刘禹锡', value: 1 },
        { source: '怀古', target: '司空曙', value: 1 },
        { source: '兴亡', target: '司空曙', value: 1 },
        { source: '感慨', target: '许浑', value: 1 },
        { source: '兴亡', target: '许浑', value: 1 },
        { source: '矛盾', target: '王筠', value: 1 },
        { source: '相思', target: '乐府歌辞', value: 1 },
        { source: '悲凉', target: '李清照', value: 1 },
        { source: '怀念', target: '邓剡', value: 1 },
        { source: '沉痛', target: '邓剡', value: 1 },
        { source: '兴亡', target: '刘克庄', value: 1 },
        { source: '感慨', target: '史可法', value: 1 },
        { source: '感慨', target: '刘禹锡', value: 1 },
        { source: '怀古', target: '刘禹锡', value: 1 },
        { source: '离别', target: '张先', value: 1 },
        { source: '眷恋', target: '张先', value: 1 },
        { source: '怀古', target: '高启', value: 1 },
        { source: '向往', target: '高启', value: 1 },
        { source: '向往', target: '李白', value: 1 },
        { source: '离别', target: '李益', value: 1 },
        { source: '兴亡', target: '胡炳文', value: 1 },
        { source: '赞美', target: '胡炳文', value: 1 },
        { source: '批评', target: '张之洞', value: 1 },
        { source: '矛盾', target: '汤显祖', value: 1 },
        { source: '感慨', target: '汪元量', value: 1 },
        { source: '兴亡', target: '汪元量', value: 1 },
        { source: '眷恋', target: '苏泂', value: 1 },
        { source: '赞美', target: '张坚', value: 1 },
        { source: '兴亡', target: '张怡', value: 1 },
        { source: '离别', target: '吴均', value: 1 },
        { source: '相思', target: '吴均', value: 1 },
        { source: '兴亡', target: '钱惟演', value: 1 },
        { source: '批评', target: '李商隐', value: 1 },
        { source: '怀古', target: '孙光宪', value: 1 },
        { source: '感慨', target: '王僧孺', value: 1 },
        { source: '悲凉', target: '赵鼎', value: 1 },
        { source: '惆怅', target: '谢惠连', value: 1 },
        { source: '感慨', target: '周紫芝', value: 1 },
        { source: '凄凉', target: '白朴', value: 1 },
        { source: '曲折', target: '白朴', value: 1 },
        { source: '兴亡', target: '许有壬', value: 1 },
        { source: '悲凉', target: '叶梦得', value: 1 },
        { source: '英雄', target: '叶梦得', value: 1 },
        { source: '沉痛', target: '叶梦得', value: 1 },
        { source: '怀念', target: '王安石', value: 1 },
        { source: '感慨', target: '李璟', value: 1 },
        { source: '凄凉', target: '李璟', value: 1 },
        { source: '感慨', target: '白朴', value: 1 },
        { source: '兴亡', target: '白朴', value: 1 },
        { source: '矛盾', target: '白朴', value: 1 },
        { source: '英雄', target: '白朴', value: 1 },
        { source: '惆怅', target: '马光祖', value: 1 },
        { source: '凄凉', target: '吴伟业', value: 1 },
        { source: '咏物', target: '谢朓', value: 1 },
        { source: '离别', target: '王昌龄', value: 1 },
        { source: '美好', target: '汤显祖', value: 1 },
        { source: '曲折', target: '汤显祖', value: 1 },
        { source: '感慨', target: '颜延之', value: 1 },
        { source: '封建', target: '颜延之', value: 1 },
        { source: '美好', target: '王暕', value: 1 },
        { source: '曲折', target: '高濂', value: 1 },
        { source: '封建', target: '高濂', value: 1 },
        { source: '怀古', target: '纳兰性德', value: 1 },
        { source: '怀古', target: '刘秩', value: 1 },
        { source: '怀古', target: '朱彝尊', value: 1 },
        { source: '向往', target: '吴兆', value: 1 },
        { source: '封建', target: '吴兆', value: 1 },
        { source: '感慨', target: '徐[火勃]', value: 1 },
        { source: '悲凉', target: '徐[火勃]', value: 1 },
        { source: '向往', target: '徐[火勃]', value: 1 },
        { source: '曲折', target: '陈白尘、董健', value: 1 },
        { source: '凄凉', target: '杨万里', value: 1 },
        { source: '封建', target: '袁枚', value: 1 },
        { source: '沉痛', target: '文天祥', value: 1 },
        { source: '感慨', target: '王勃', value: 1 },
        { source: '封建', target: '凌蒙初', value: 1 },
        { source: '英雄', target: '辛弃疾', value: 1 },
        { source: '怀古', target: '周邦彦', value: 1 },
        { source: '怀古', target: '罗隐', value: 1 },
        { source: '离别', target: '王勃', value: 1 },
        { source: '怀古', target: '刘克庄', value: 1 },
        { source: '向往', target: '刘克庄', value: 1 },
        { source: '兴亡', target: '吴伟业', value: 1 },
        { source: '咏物', target: '周济', value: 1 },
        { source: '封建', target: '施惠', value: 1 },
        { source: '怀古', target: '夏承焘', value: 1 },
        { source: '曲折', target: '夏承焘', value: 1 },
        { source: '英雄', target: '许自昌', value: 1 },
        { source: '封建', target: '许自昌', value: 1 },
        { source: '怀古', target: '徐渭', value: 1 },
        { source: '感慨', target: '徐渭', value: 1 },
        { source: '咏物', target: '金銮', value: 1 },
        { source: '无奈', target: '白朴', value: 1 },
        { source: '美好', target: '白朴', value: 1 },
        { source: '无奈', target: '王安石', value: 1 },
        { source: '感慨', target: '庾肩吾', value: 1 },
        { source: '咏物', target: '庾肩吾', value: 1 },
        { source: '兴亡', target: '欧阳炯', value: 1 },
        { source: '兴亡', target: '王士禛', value: 1 },
        { source: '咏物', target: '王士禛', value: 1 },
        { source: '批评', target: '萧纲', value: 1 },
        { source: '曲折', target: '王安石', value: 1 },
        { source: '离别', target: '马守贞', value: 1 },
        { source: '感慨', target: '林古度', value: 1 },
        { source: '兴亡', target: '赵执信', value: 1 },
        { source: '沉痛', target: '赵执信', value: 1 },
        { source: '感慨', target: '周亮工', value: 1 },
        { source: '向往', target: '谢混', value: 1 },
        { source: '感慨', target: '于右任', value: 1 },
        { source: '封建', target: '余怀', value: 1 },
        { source: '曲折', target: '吴伟业', value: 1 },
        { source: '赞美', target: '朱孟震', value: 1 },
        { source: '向往', target: '朱孟震', value: 1 },
        { source: '感慨', target: '高蟾', value: 1 },
        { source: '向往', target: '东吴童谣', value: 1 },
        { source: '相思', target: '鲍令晖', value: 1 },
        { source: '离别', target: '鲍令晖', value: 1 },
        { source: '美好', target: '鲍令晖', value: 1 },
        { source: '怀古', target: '鲍照', value: 1 },
        { source: '感慨', target: '鲍照', value: 1 },
        { source: '离别', target: '沈约', value: 1 },
        { source: '沉痛', target: '沈约', value: 1 },
        { source: '咏物', target: '萧道成', value: 1 },
        { source: '离别', target: '谢朓', value: 1 },
        { source: '矛盾', target: '谢朓', value: 1 },
        { source: '英雄', target: '曹景宗', value: 1 },
        { source: '惆怅', target: '何逊', value: 1 },
        { source: '离别', target: '王僧孺', value: 1 },
        { source: '美好', target: '吴均', value: 1 },
        { source: '咏物', target: '萧绎', value: 1 },
        { source: '美好', target: '萧子范', value: 1 },
        { source: '离别', target: '萧子显', value: 1 },
        { source: '相思', target: '萧子显', value: 1 },
        { source: '惆怅', target: '冯延巳', value: 1 },
        { source: '相思', target: '李璟', value: 1 },
        { source: '怀念', target: '李璟', value: 1 },
        { source: '无奈', target: '李璟', value: 1 },
        { source: '感慨', target: '李煜', value: 1 },
        { source: '离别', target: '李煜', value: 1 },
        { source: '沉痛', target: '李煜', value: 1 },
        { source: '凄凉', target: '李煜', value: 1 },
        { source: '悲凉', target: '王安石', value: 1 },
        { source: '怀古', target: '王安石', value: 1 },
        { source: '兴亡', target: '王安石', value: 1 },
        { source: '眷恋', target: '文天祥', value: 1 },
        { source: '悲凉', target: '朱敦儒', value: 1 },
        { source: '沉痛', target: '朱敦儒', value: 1 },
        { source: '无奈', target: '朱敦儒', value: 1 },
        { source: '感慨', target: '曾极', value: 1 },
        { source: '怀古', target: '郭祥正', value: 1 },
        { source: '怀古', target: '李纲', value: 1 },
        { source: '怀古', target: '潘阆', value: 1 },
        { source: '兴亡', target: '潘阆', value: 1 },
        { source: '凄凉', target: '潘阆', value: 1 },
        { source: '兴亡', target: '苏轼', value: 1 },
        { source: '赞美', target: '苏轼', value: 1 },
        { source: '无奈', target: '汪元量', value: 1 },
        { source: '无奈', target: '王奕', value: 1 },
        { source: '悲凉', target: '杨备', value: 1 },
        { source: '沉痛', target: '杨备', value: 1 },
        { source: '怀古', target: '杨万里', value: 1 },
        { source: '怀古', target: '张昪', value: 1 },
        { source: '怀古', target: '张耒', value: 1 },
        { source: '感慨', target: '张耒', value: 1 },
        { source: '惆怅', target: '张鎡', value: 1 },
        { source: '兴亡', target: '赵长卿', value: 1 },
        { source: '感慨', target: '查德卿', value: 1 },
        { source: '兴亡', target: '查德卿', value: 1 },
        { source: '怀古', target: '马致远', value: 1 },
        { source: '兴亡', target: '马致远', value: 1 },
        { source: '向往', target: '乔吉', value: 1 },
        { source: '美好', target: '乔吉', value: 1 },
        { source: '感慨', target: '萨都剌', value: 1 },
        { source: '怀古', target: '萨都剌', value: 1 },
        { source: '兴亡', target: '陶宗仪', value: 1 },
        { source: '怀古', target: '王冕', value: 1 },
        { source: '惆怅', target: '王冕', value: 1 },
        { source: '英雄', target: '王冕', value: 1 },
        { source: '兴亡', target: '张可久', value: 1 },
        { source: '惆怅', target: '张可久', value: 1 },
        { source: '感慨', target: '张可久', value: 1 },
        { source: '美好', target: '卞赛', value: 1 },
        { source: '怀古', target: '陈沂', value: 1 },
        { source: '封建', target: '崔铣', value: 1 },
        { source: '美好', target: '崔嫣然', value: 1 },
        { source: '赞美', target: '高启', value: 1 },
        { source: '封建', target: '高启', value: 1 },
        { source: '感慨', target: '顾璘', value: 1 },
        { source: '封建', target: '解缙', value: 1 },
        { source: '美好', target: '刘基', value: 1 },
        { source: '怀古', target: '刘基', value: 1 },
        { source: '无奈', target: '柳如是', value: 1 },
        { source: '眷恋', target: '柳如是', value: 1 },
        { source: '相思', target: '柳如是', value: 1 },
        { source: '相思', target: '马守贞', value: 1 },
        { source: '相思', target: '沙宛', value: 1 },
        { source: '离别', target: '王微', value: 1 },
        { source: '相思', target: '王微', value: 1 },
        { source: '惆怅', target: '王月', value: 1 },
        { source: '惆怅', target: '杨宛', value: 1 },
        { source: '离别', target: '杨宛', value: 1 },
        { source: '相思', target: '杨宛', value: 1 },
        { source: '封建', target: '卓人月', value: 1 },
        { source: '怀念', target: '陈子龙', value: 1 },
        { source: '怀古', target: '吴伟业', value: 1 },
        { source: '怀古', target: '余怀', value: 1 },
        { source: '兴亡', target: '曹亮武', value: 1 },
        { source: '怀念', target: '曹亮武', value: 1 },
        { source: '感慨', target: '曹雪芹', value: 1 },
        { source: '咏物', target: '杜文澜', value: 1 },
        { source: '兴亡', target: '蒋景祁', value: 1 },
        { source: '怀念', target: '蒋景祁', value: 1 },
        { source: '英雄', target: '林则徐', value: 1 },
        { source: '怀古', target: '彭孙贻', value: 1 },
        { source: '赞美', target: '钱大昕', value: 1 },
        { source: '怀念', target: '史惟圆', value: 1 },
        { source: '怀古', target: '吴绮', value: 1 },
        { source: '怀念', target: '吴绮', value: 1 },
        { source: '悲凉', target: '邢昉', value: 1 },
        { source: '兴亡', target: '邢昉', value: 1 },
        { source: '悲凉', target: '赵函', value: 1 },
        { source: '感慨', target: '郑孝胥', value: 1 },
        { source: '感慨', target: '郑燮', value: 1 },
        { source: '无奈', target: '郑燮', value: 1 },
        { source: '兴亡', target: '朱一是', value: 1 },
        { source: '英雄', target: '朱一是', value: 1 },
        { source: '感慨', target: '朱彝尊', value: 1 },
        { source: '兴亡', target: '朱彝尊', value: 1 },
        { source: '怀念', target: '朱彝尊', value: 1 },
        { source: '英雄', target: '朱彝尊', value: 1 },
        { source: '批评', target: '朱彝尊', value: 1 },
        { source: '批评', target: '罗宗强', value: 1 },
        { source: '感慨', target: '范师孟', value: 1 },
        { source: '怀古', target: '陆宗窐', value: 1 },
        { source: '兴亡', target: '赵?', value: 1 },
        { source: '怀古', target: '郑梦周', value: 1 },
        { source: '怀古', target: '古贺朴', value: 1 },
        { source: '怀古', target: '白朴', value: 1 },


        { source: '传状文', target: '封建', value: 1 },
        { source: '赋', target: '眷恋', value: 1 },
        { source: '骈体文', target: '封建', value: 1 },
        { source: '论说文', target: '批评', value: 1 },
        { source: '论说文', target: '封建', value: 1 },
        { source: '小说', target: '赞美', value: 1 },
        { source: '赋', target: '兴亡', value: 1 },
        { source: '论说文', target: '咏物', value: 1 },
        { source: '诗', target: '怀古', value: 1 },
        { source: '诗', target: '咏物', value: 1 },
        { source: '五言古体诗', target: '曲折', value: 1 },
        { source: '乐府诗', target: '感慨', value: 1 },
        { source: '乐府诗', target: '无奈', value: 1 },
        { source: '七言律绝', target: '美好', value: 1 },
        { source: '七言律绝', target: '向往', value: 1 },
        { source: '乐府诗', target: '眷恋', value: 1 },
        { source: '五言律诗', target: '感慨', value: 1 },
        { source: '五言律诗', target: '兴亡', value: 1 },
        { source: '五言律绝', target: '怀古', value: 1 },
        { source: '五言律绝', target: '兴亡', value: 1 },
        { source: '乐府诗', target: '矛盾', value: 1 },
        { source: '古体诗', target: '相思', value: 1 },
        { source: '五言律绝', target: '感慨', value: 1 },
        { source: '杂言诗', target: '怀古', value: 1 },
        { source: '乐府诗', target: '向往', value: 1 },
        { source: '散文', target: '兴亡', value: 1 },
        { source: '散文', target: '赞美', value: 1 },
        { source: '五言古体诗', target: '批评', value: 1 },
        { source: '七言律绝', target: '眷恋', value: 1 },
        { source: '剧曲', target: '赞美', value: 1 },
        { source: '笔记文', target: '兴亡', value: 1 },
        { source: '乐府诗', target: '离别', value: 1 },
        { source: '乐府诗', target: '相思', value: 1 },
        { source: '七言律诗', target: '批评', value: 1 },
        { source: '七言律绝', target: '怀念', value: 1 },
        { source: '词', target: '凄凉', value: 1 },
        { source: '词', target: '矛盾', value: 1 },
        { source: '五言律诗', target: '赞美', value: 1 },
        { source: '赋', target: '咏物', value: 1 },
        { source: '剧曲', target: '美好', value: 1 },
        { source: '哀祭文', target: '感慨', value: 1 },
        { source: '剧曲', target: '曲折', value: 1 },
        { source: '杂言诗', target: '向往', value: 1 },
        { source: '杂言诗', target: '封建', value: 1 },
        { source: '七言律诗', target: '悲凉', value: 1 },
        { source: '论说文', target: '曲折', value: 1 },
        { source: '哀祭文', target: '封建', value: 1 },
        { source: '剧曲', target: '矛盾', value: 1 },
        { source: '五言律诗', target: '沉痛', value: 1 },
        { source: '骈体文', target: '感慨', value: 1 },
        { source: '小说', target: '封建', value: 1 },
        { source: '五言律诗', target: '离别', value: 1 },
        { source: '别集', target: '咏物', value: 1 },
        { source: '词', target: '曲折', value: 1 },
        { source: '剧曲', target: '英雄', value: 1 },
        { source: '散曲集', target: '咏物', value: 1 },
        { source: '五言古体诗', target: '感慨', value: 1 },
        { source: '七言律诗', target: '咏物', value: 1 },
        { source: '书牍文', target: '批评', value: 1 },
        { source: '七言律绝', target: '曲折', value: 1 },
        { source: '诗文集', target: '感慨', value: 1 },
        { source: '七言律诗', target: '封建', value: 1 },
        { source: '乐府诗', target: '曲折', value: 1 },
        { source: '七言律诗', target: '赞美', value: 1 },
        { source: '七言律诗', target: '向往', value: 1 },
        { source: '五言古体诗', target: '向往', value: 1 },
        { source: '五言古体诗', target: '相思', value: 1 },
        { source: '五言古体诗', target: '美好', value: 1 },
        { source: '七言古体诗', target: '感慨', value: 1 },
        { source: '赋', target: '怀古', value: 1 },
        { source: '赋', target: '感慨', value: 1 },
        { source: '五言古体诗', target: '沉痛', value: 1 },
        { source: '五言古体诗', target: '矛盾', value: 1 },
        { source: '五言古体诗', target: '英雄', value: 1 },
        { source: '五言古体诗', target: '惆怅', value: 1 },
        { source: '五言古体诗', target: '离别', value: 1 },
        { source: '文', target: '美好', value: 1 },
        { source: '五言古体诗', target: '咏物', value: 1 },
        { source: '乐府诗', target: '美好', value: 1 },
        { source: '七言古体诗', target: '离别', value: 1 },
        { source: '七言古体诗', target: '相思', value: 1 },
        { source: '七言律诗', target: '凄凉', value: 1 },
        { source: '词', target: '悲凉', value: 1 },
        { source: '词', target: '沉痛', value: 1 },
        { source: '七言律绝', target: '兴亡', value: 1 },
        { source: '七言律绝', target: '凄凉', value: 1 },
        { source: '七言律绝', target: '悲凉', value: 1 },
        { source: '七言律绝', target: '沉痛', value: 1 },
        { source: '散曲', target: '怀古', value: 1 },
        { source: '散曲', target: '向往', value: 1 },
        { source: '散曲', target: '美好', value: 1 },
        { source: '七言律诗', target: '惆怅', value: 1 },
        { source: '七言律诗', target: '英雄', value: 1 },
        { source: '散曲', target: '兴亡', value: 1 },
        { source: '散曲', target: '惆怅', value: 1 },
        { source: '散曲', target: '感慨', value: 1 },
        { source: '文集', target: '封建', value: 1 },
        { source: '词', target: '赞美', value: 1 },
        { source: '词', target: '封建', value: 1 },
        { source: '五言排律', target: '感慨', value: 1 },
        { source: '公牍文', target: '封建', value: 1 },
        { source: '词', target: '美好', value: 1 },
        { source: '词', target: '眷恋', value: 1 },
        { source: '词', target: '惆怅', value: 1 },
        { source: '词', target: '离别', value: 1 },
        { source: '词', target: '相思', value: 1 },
        { source: '剧曲', target: '封建', value: 1 },
        { source: '七言律诗', target: '怀念', value: 1 },
        { source: '词', target: '咏物', value: 1 },
        { source: '七言律绝', target: '英雄', value: 1 },
        { source: '七言律绝', target: '赞美', value: 1 },
        { source: '七言古体诗', target: '兴亡', value: 1 },
        { source: '七言古体诗', target: '悲凉', value: 1 },
        { source: '文集', target: '兴亡', value: 1 },
        { source: '诗集', target: '悲凉', value: 1 },
        { source: '七言律绝', target: '感慨', value: 1 },
        { source: '词', target: '无奈', value: 1 },
        { source: '词', target: '感慨', value: 1 },
        { source: '词', target: '兴亡', value: 1 },
        { source: '词', target: '怀念', value: 1 },
        { source: '词', target: '英雄', value: 1 },
        { source: '词', target: '批评', value: 1 },
        { source: '七言律诗', target: '感慨', value: 1 },
        { source: '七言律诗', target: '兴亡', value: 1 },
        { source: '七言律绝', target: '怀古', value: 1 },
        { source: '七言律诗', target: '怀古', value: 1 },
        { source: '词', target: '怀古', value: 1 },
      ],
      type: 'sankey',
      layout: 'none', // 添加此属性能够关闭图布局计算
      focusNodeAdjacency: true,
      label: {
        show: true,
        formatter:  function(params) {
          return params.name.split('').join('\n');},
        position: 'bottom', // 标签位置在节点右侧
        // color: '#000', // 标签颜色为白色
        // fontSize: 15, // 标签字体大小为 10 像素
        // rotate: -90 // 顺时针旋转 90 度
      },
      itemStyle: {
        
        borderWidth: 1,
        // color: '#4b565b'
      },
      lineStyle: {
        color: 'source',
        curveness: 0.5
      },
      emphasis: {
        itemStyle: {
          borderWidth: 3,
          borderColor: '#333',
          color: '#ccc',
        },
      },
      // symbol: 'circle',
      // symbolSize: 10, // 圆点大小
      orient: 'vertical', // 设置为横向排列horizontal
      // nodeWidth: 20, // 设置节点宽度
      nodeGap: 20, // 设置节点之间的距离
      // layoutIterations: 32, // 布局迭代次数（默认值为32）
    }
  ]
}


// 使用刚指定的配置项和数据显示图表。
chordmyChart.setOption(chordoption);
