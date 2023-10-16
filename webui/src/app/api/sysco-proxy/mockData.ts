import { parseStringPromise } from "xml2js";

const data = `<?xml version="1.0" encoding="UTF-8"?>
<emprecords lookupstatus="OK" members="514">
<employee empid="93045">
<cname>施永森</cname>
<costcode>1000</costcode>
<dptname>生產部</dptname>
<level>4</level>
</employee>
<employee empid="01018">
<cname>陳昱銘</cname>
<costcode>1000</costcode>
<dptname>生產部</dptname>
<level>2</level>
</employee>
<employee empid="22028">
<cname>王霖軒</cname>
<costcode>1000</costcode>
<dptname>生產部</dptname>
<level>2</level>
</employee>
<employee empid="97031">
<cname>莊世偉</cname>
<costcode>1100</costcode>
<dptname>生產部/冷軋廠</dptname>
<level>3</level>
</employee>
<employee empid="94052">
<cname>江明輝</cname>
<costcode>1100</costcode>
<dptname>生產部/冷軋廠</dptname>
<level>2</level>
</employee>
<employee empid="15013">
<cname>萬秉勳</cname>
<costcode>1100</costcode>
<dptname>生產部/冷軋廠</dptname>
<level>1</level>
</employee>
<employee empid="98003">
<cname>戴國輝</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>2</level>
</employee>
<employee empid="88202">
<cname>黃信雄</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="15011">
<cname>林佑修</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="88004">
<cname>盧星旭</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="90084">
<cname>楊几安</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="89026">
<cname>李建福</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="17005">
<cname>黃騰頤</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="20005">
<cname>許惟誠</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="20006">
<cname>陳志友</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="21025">
<cname>龔士傑</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="23009">
<cname>盧承漢</cname>
<costcode>1111</costcode>
<dptname>生產部/冷軋廠/研磨課</dptname>
<level>1</level>
</employee>
<employee empid="98009">
<cname>李建堂</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>2</level>
</employee>
<employee empid="11005">
<cname>楊居益</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="89072">
<cname>張志各</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="92009">
<cname>張家祥</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="94016">
<cname>蔣江林</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="19015">
<cname>陳皆丞</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="88028">
<cname>陳盈裕</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="94056">
<cname>李哲宏</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="90066">
<cname>黃志明</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="20010">
<cname>洪旭成</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="20007">
<cname>龔暉棠</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="21007">
<cname>温信鴻</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="21008">
<cname>楊士賢</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="22008">
<cname>陳育佑</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="22013">
<cname>林漢信</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="22019">
<cname>楊程允</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="23012">
<cname>吳展銘</cname>
<costcode>1112</costcode>
<dptname>生產部/冷軋廠/酸洗課</dptname>
<level>1</level>
</employee>
<employee empid="14012">
<cname>張祐愷</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>2</level>
</employee>
<employee empid="15010">
<cname>高智中</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="15006">
<cname>何承憲</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="88125">
<cname>林永記</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="94060">
<cname>黃仲德</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="18034">
<cname>楊鎮豪</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="89028">
<cname>洪文杉</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="07021">
<cname>吳風源</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="15012">
<cname>蕭國華</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="09007">
<cname>賴建男</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="87023">
<cname>林榮平</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="93056">
<cname>陳玝岓</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="17006">
<cname>陳信璋</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="17007">
<cname>林峻宇</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="14025">
<cname>徐睿鴻</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="97029">
<cname>林俊宏</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="85087">
<cname>吳加再</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="19003">
<cname>許明吉</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="94026">
<cname>黃保賢</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="21006">
<cname>王瑜揮</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="21033">
<cname>陳振億</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="22010">
<cname>顏愷汎</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="23011">
<cname>陳志旗</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="23022">
<cname>黃威慎</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="23034">
<cname>潘昱誠</cname>
<costcode>1113</costcode>
<dptname>生產部/冷軋廠/軋延一課</dptname>
<level>1</level>
</employee>
<employee empid="14042">
<cname>蔡全順</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>2</level>
</employee>
<employee empid="87036">
<cname>劉紹享</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="95038">
<cname>張輝煌</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="87034">
<cname>郭頂志</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="97025">
<cname>廖志文</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="88194">
<cname>林永富</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="88262">
<cname>郭金連</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="19004">
<cname>洪振修</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="18040">
<cname>蔡易洋</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="16013">
<cname>劉威儀</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="89067">
<cname>呂茂輝</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="85043">
<cname>尹文</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="14036">
<cname>龔永全</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="06016">
<cname>陳煒中</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="93004">
<cname>陳文明</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="04002">
<cname>林信宏</cname>
<costcode>1116</costcode>
<dptname>生產部/冷軋廠/軋延二課</dptname>
<level>1</level>
</employee>
<employee empid="99002">
<cname>朱東南</cname>
<costcode>1200</costcode>
<dptname>生產部/鍍鋅廠</dptname>
<level>3</level>
</employee>
<employee empid="99014">
<cname>邱坤迪</cname>
<costcode>1200</costcode>
<dptname>生產部/鍍鋅廠</dptname>
<level>2</level>
</employee>
<employee empid="15027">
<cname>陳奕成</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>2</level>
</employee>
<employee empid="96050">
<cname>王祺軒</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="88154">
<cname>石祖傑</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="14038">
<cname>黃熖宏</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="18006">
<cname>楊竣宇</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="13002">
<cname>薛明來</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="92056">
<cname>許勝添</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="00007">
<cname>黃盟欽</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="00019">
<cname>許義宏</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="90038">
<cname>劉明殿</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="88277">
<cname>伍雙湖</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="15028">
<cname>丁福東</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="92005">
<cname>陳添春</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="89062">
<cname>陳高章</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="88110">
<cname>許啟聰</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="90053">
<cname>洪福榮</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="98007">
<cname>謝志強</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="88207">
<cname>簡義源</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="90035">
<cname>陳哲雄</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="07020">
<cname>洪懷慈</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="00023">
<cname>洪志煌</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="20027">
<cname>黃聖翔</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="21009">
<cname>吳振豪</cname>
<costcode>1210</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅一課</dptname>
<level>1</level>
</employee>
<employee empid="11007">
<cname>謝慶勳</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>2</level>
</employee>
<employee empid="94036">
<cname>陳俊生</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="92037">
<cname>侯旭展</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="88186">
<cname>陸昭基</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="00011">
<cname>李敏彰</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="01008">
<cname>李建樺</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="88140">
<cname>洪子文</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="94013">
<cname>林春福</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="94015">
<cname>陳怡呈</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="93033">
<cname>李俊德</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="14035">
<cname>徐孟寰</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="01003">
<cname>連新發</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="13003">
<cname>黃亮源</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="04008">
<cname>蘇武建</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="88104">
<cname>吳明璋</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="00012">
<cname>楊俊男</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="92023">
<cname>林三吉</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="19009">
<cname>林家正</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="88121">
<cname>洪城彬</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="18010">
<cname>陳昱帆</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="92011">
<cname>陳盈廷</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="00009">
<cname>李建志</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="19026">
<cname>洪梓翔</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="94012">
<cname>龔信旭</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="92052">
<cname>鄭國仁</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="88138">
<cname>洪三智</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="92095">
<cname>周黃文賓</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="93049">
<cname>簡竹源</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="20015">
<cname>李東益</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="21026">
<cname>張修銓</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="21030">
<cname>吳喬凱</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="21032">
<cname>蔡亞諭</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="21045">
<cname>劉冠亨</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="23023">
<cname>葉正源</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="23030">
<cname>張殷齊</cname>
<costcode>1220</costcode>
<dptname>生產部/鍍鋅廠/鍍鋅二課</dptname>
<level>1</level>
</employee>
<employee empid="09005">
<cname>林清仁</cname>
<costcode>1600</costcode>
<dptname>生產部/烤漆廠</dptname>
<level>3</level>
</employee>
<employee empid="16011">
<cname>蘇秋彰</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>2</level>
</employee>
<employee empid="90049">
<cname>黃崇賢</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="95023">
<cname>張宸豐</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="88234">
<cname>張益源</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="93005">
<cname>侯信吉</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="89005">
<cname>蔡坤福</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="90029">
<cname>鄧學基</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="87071">
<cname>洪文峯</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="91028">
<cname>楊文忠</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="88192">
<cname>林春仲</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="93016">
<cname>吳福富</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="88239">
<cname>陳同冠</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="88238">
<cname>李憲坤</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="18023">
<cname>劉振緯</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="20002">
<cname>莊孟諺</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="20011">
<cname>洪彥輝</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="21016">
<cname>黃晟祐</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="21019">
<cname>唐翊荃</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="21017">
<cname>蔡岳璋</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="21018">
<cname>陳韋呈</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="21027">
<cname>蔡伯欣</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="21035">
<cname>蘇聖智</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="21034">
<cname>孫偉峻</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="21049">
<cname>黃信智</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="23025">
<cname>施明樺</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="23024">
<cname>陳唐堯</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="23035">
<cname>黃勝興</cname>
<costcode>1610</costcode>
<dptname>生產部/烤漆廠/烤漆一課</dptname>
<level>1</level>
</employee>
<employee empid="14016">
<cname>李忠諭</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>2</level>
</employee>
<employee empid="90050">
<cname>蔡文家</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="00024">
<cname>戴榮宏</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="94028">
<cname>吳芳原</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="88275">
<cname>楊明富</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="17015">
<cname>陳俊凱</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="90048">
<cname>黃政傑</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="18022">
<cname>張介瑋</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="88153">
<cname>林錦福</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="16010">
<cname>胡哲豪</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="15007">
<cname>劉育廷</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="15021">
<cname>陳煜翰</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="85209">
<cname>歐陽輝</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="14039">
<cname>許家銘</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="18007">
<cname>林志祥</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="14020">
<cname>陳昱宏</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="88246">
<cname>翁龍泉</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="18008">
<cname>龔真玄</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="18002">
<cname>林孟澤</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="20012">
<cname>傅國豪</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="20013">
<cname>莊耿豪</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="20016">
<cname>曾介群</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="20017">
<cname>簡銘誼</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="20021">
<cname>劉冠均</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="21040">
<cname>莊英廷</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="22002">
<cname>吳啟宏</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="23020">
<cname>黃聖堯</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="23026">
<cname>謝有春</cname>
<costcode>1620</costcode>
<dptname>生產部/烤漆廠/烤漆二課</dptname>
<level>1</level>
</employee>
<employee empid="97016">
<cname>陳明賢</cname>
<costcode>2000</costcode>
<dptname>工程部</dptname>
<level>4</level>
</employee>
<employee empid="86081">
<cname>王偉忠</cname>
<costcode>2000</costcode>
<dptname>工程部</dptname>
<level>3</level>
</employee>
<employee empid="90063">
<cname>紀博仁</cname>
<costcode>2000</costcode>
<dptname>工程部</dptname>
<level>3</level>
</employee>
<employee empid="88059">
<cname>邱平順</cname>
<costcode>2000</costcode>
<dptname>工程部</dptname>
<level>3</level>
</employee>
<employee empid="88244">
<cname>李淑藝</cname>
<costcode>2000</costcode>
<dptname>工程部</dptname>
<level>1</level>
</employee>
<employee empid="01014">
<cname>蔡濬仰</cname>
<costcode>2100</costcode>
<dptname>工程部/設備處</dptname>
<level>3</level>
</employee>
<employee empid="14027">
<cname>黃弘竣</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>2</level>
</employee>
<employee empid="97024">
<cname>張巽傑</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="14032">
<cname>洪士哲</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="13004">
<cname>黃信穎</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="93037">
<cname>陳勝富</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="05001">
<cname>施富元</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="17001">
<cname>林琨濤</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="16002">
<cname>黃佳銘</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="92035">
<cname>蔡吉男</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="14015">
<cname>洪宥朋</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="17014">
<cname>何冠儒</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="17013">
<cname>李家榮</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="14026">
<cname>洪梓瑋</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="10010">
<cname>紀泰男</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="16020">
<cname>梁哲銘</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="12008">
<cname>陳士晉</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="18037">
<cname>吳哲宇</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="20024">
<cname>劉競鴻</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="21041">
<cname>張學祥</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="23001">
<cname>張家豪</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="23027">
<cname>黃子恆</cname>
<costcode>2121</costcode>
<dptname>工程部/設備處/修護作業課</dptname>
<level>1</level>
</employee>
<employee empid="01041">
<cname>楊世樑</cname>
<costcode>2122</costcode>
<dptname>工程部/設備處/修護規劃課</dptname>
<level>2</level>
</employee>
<employee empid="19018">
<cname>陳奕達</cname>
<costcode>2122</costcode>
<dptname>工程部/設備處/修護規劃課</dptname>
<level>1</level>
</employee>
<employee empid="86010">
<cname>張榮顯</cname>
<costcode>2122</costcode>
<dptname>工程部/設備處/修護規劃課</dptname>
<level>1</level>
</employee>
<employee empid="18014">
<cname>李曜廷</cname>
<costcode>2122</costcode>
<dptname>工程部/設備處/修護規劃課</dptname>
<level>1</level>
</employee>
<employee empid="22011">
<cname>黃威儒</cname>
<costcode>2122</costcode>
<dptname>工程部/設備處/修護規劃課</dptname>
<level>1</level>
</employee>
<employee empid="23021">
<cname>陳泓錡</cname>
<costcode>2122</costcode>
<dptname>工程部/設備處/修護規劃課</dptname>
<level>1</level>
</employee>
<employee empid="23032">
<cname>鄭言廷</cname>
<costcode>2122</costcode>
<dptname>工程部/設備處/修護規劃課</dptname>
<level>1</level>
</employee>
<employee empid="14033">
<cname>王創霖</cname>
<costcode>2123</costcode>
<dptname>工程部/設備處/預防保養課</dptname>
<level>2</level>
</employee>
<employee empid="96032">
<cname>黃敏忠</cname>
<costcode>2123</costcode>
<dptname>工程部/設備處/預防保養課</dptname>
<level>1</level>
</employee>
<employee empid="89069">
<cname>黃進雄</cname>
<costcode>2123</costcode>
<dptname>工程部/設備處/預防保養課</dptname>
<level>1</level>
</employee>
<employee empid="21042">
<cname>許畯維</cname>
<costcode>2123</costcode>
<dptname>工程部/設備處/預防保養課</dptname>
<level>1</level>
</employee>
<employee empid="97038">
<cname>邵宗林</cname>
<costcode>2200</costcode>
<dptname>工程部/公用廠</dptname>
<level>3</level>
</employee>
<employee empid="13010">
<cname>黃士銘</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>2</level>
</employee>
<employee empid="89009">
<cname>黃奈迪</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>2</level>
</employee>
<employee empid="88009">
<cname>蘇登仁</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="18031">
<cname>宋雨軒</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="93055">
<cname>林志輝</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="19025">
<cname>洪均憲</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="19006">
<cname>李浚永</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="93046">
<cname>洪義雄</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="90032">
<cname>曾彥文</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="88285">
<cname>李建雄</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="90080">
<cname>李國源</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="20003">
<cname>劉建廷</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="23010">
<cname>蔣忠穎</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="23019">
<cname>李吉閔</cname>
<costcode>2210</costcode>
<dptname>工程部/公用廠/公用課</dptname>
<level>1</level>
</employee>
<employee empid="93031">
<cname>徐一忠</cname>
<costcode>2300</costcode>
<dptname>工程部/專案工程處</dptname>
<level>3</level>
</employee>
<employee empid="95013">
<cname>趙永輝</cname>
<costcode>2310</costcode>
<dptname>工程部/專案工程處/機械課</dptname>
<level>2</level>
</employee>
<employee empid="19020">
<cname>林世荃</cname>
<costcode>2310</costcode>
<dptname>工程部/專案工程處/機械課</dptname>
<level>1</level>
</employee>
<employee empid="23004">
<cname>徐家祥</cname>
<costcode>2310</costcode>
<dptname>工程部/專案工程處/機械課</dptname>
<level>1</level>
</employee>
<employee empid="95012">
<cname>劉永煌</cname>
<costcode>2320</costcode>
<dptname>工程部/專案工程處/電氣課</dptname>
<level>2</level>
</employee>
<employee empid="16021">
<cname>邱柏欽</cname>
<costcode>2330</costcode>
<dptname>工程部/專案工程處/營建課</dptname>
<level>2</level>
</employee>
<employee empid="21037">
<cname>盧昱成</cname>
<costcode>2330</costcode>
<dptname>工程部/專案工程處/營建課</dptname>
<level>1</level>
</employee>
<employee empid="90073">
<cname>陳志成</cname>
<costcode>2400</costcode>
<dptname>工程部/儀電處</dptname>
<level>3</level>
</employee>
<employee empid="98025">
<cname>蔡曜隆</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>2</level>
</employee>
<employee empid="17011">
<cname>朱建興</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="93053">
<cname>薛百宏</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="88189">
<cname>張景堯</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="90021">
<cname>曾朝信</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="18026">
<cname>余宗翰</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="98006">
<cname>黃毓樑</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="16017">
<cname>陳俊明</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="89044">
<cname>陳建財</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="20026">
<cname>梁凱斌</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="21043">
<cname>蔡彥寬</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="23005">
<cname>邱子軒</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="23028">
<cname>陳泓廷</cname>
<costcode>2410</costcode>
<dptname>工程部/儀電處/電機一課</dptname>
<level>1</level>
</employee>
<employee empid="01043">
<cname>楊士鋒</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>2</level>
</employee>
<employee empid="13007">
<cname>蕭宇廷</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="01042">
<cname>賴俊秀</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="92080">
<cname>林孝慈</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="19021">
<cname>黃聖洲</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="04003">
<cname>江孟學</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="15018">
<cname>陳伯昇</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="16022">
<cname>孫冠緯</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="20022">
<cname>劉康酩</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="20025">
<cname>徐正緯</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="22003">
<cname>劉憬勳</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="22014">
<cname>蔡政群</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="22015">
<cname>李宗蔚</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="23006">
<cname>黃國皓</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="23015">
<cname>王國軒</cname>
<costcode>2420</costcode>
<dptname>工程部/儀電處/電機二課</dptname>
<level>1</level>
</employee>
<employee empid="86070">
<cname>張慶輝</cname>
<costcode>2430</costcode>
<dptname>工程部/儀電處/預保規劃課</dptname>
<level>2</level>
</employee>
<employee empid="94030">
<cname>黃一新</cname>
<costcode>2430</costcode>
<dptname>工程部/儀電處/預保規劃課</dptname>
<level>1</level>
</employee>
<employee empid="07016">
<cname>徐正青</cname>
<costcode>2430</costcode>
<dptname>工程部/儀電處/預保規劃課</dptname>
<level>1</level>
</employee>
<employee empid="23008">
<cname>林志賢</cname>
<costcode>2430</costcode>
<dptname>工程部/儀電處/預保規劃課</dptname>
<level>1</level>
</employee>
<employee empid="96001">
<cname>陳逸洋</cname>
<costcode>3100</costcode>
<dptname>生產工程部門/工業工程處</dptname>
<level>3</level>
</employee>
<employee empid="98014">
<cname>趙格慕</cname>
<costcode>3110</costcode>
<dptname>生產工程部門/工業工程處/ＩＥ一課</dptname>
<level>2</level>
</employee>
<employee empid="95015">
<cname>葉彥成</cname>
<costcode>3110</costcode>
<dptname>生產工程部門/工業工程處/ＩＥ一課</dptname>
<level>1</level>
</employee>
<employee empid="88145">
<cname>陳亮光</cname>
<costcode>3110</costcode>
<dptname>生產工程部門/工業工程處/ＩＥ一課</dptname>
<level>1</level>
</employee>
<employee empid="00050">
<cname>蘇志銘</cname>
<costcode>3120</costcode>
<dptname>生產工程部門/工業工程處/ＩＥ二課</dptname>
<level>2</level>
</employee>
<employee empid="88286">
<cname>張新香</cname>
<costcode>3120</costcode>
<dptname>生產工程部門/工業工程處/ＩＥ二課</dptname>
<level>1</level>
</employee>
<employee empid="86120">
<cname>林美雀</cname>
<costcode>3120</costcode>
<dptname>生產工程部門/工業工程處/ＩＥ二課</dptname>
<level>1</level>
</employee>
<employee empid="93018">
<cname>莊瑞榮</cname>
<costcode>3200</costcode>
<dptname>生產工程部門/生產管制處</dptname>
<level>3</level>
</employee>
<employee empid="96033">
<cname>陳建宏</cname>
<costcode>3210</costcode>
<dptname>生產工程部門/生產管制處/生管一課</dptname>
<level>2</level>
</employee>
<employee empid="88109">
<cname>張錦鴻</cname>
<costcode>3210</costcode>
<dptname>生產工程部門/生產管制處/生管一課</dptname>
<level>1</level>
</employee>
<employee empid="15016">
<cname>柳育麟</cname>
<costcode>3210</costcode>
<dptname>生產工程部門/生產管制處/生管一課</dptname>
<level>1</level>
</employee>
<employee empid="15003">
<cname>段俊旭</cname>
<costcode>3210</costcode>
<dptname>生產工程部門/生產管制處/生管一課</dptname>
<level>1</level>
</employee>
<employee empid="01040">
<cname>劉奕亨</cname>
<costcode>3220</costcode>
<dptname>生產工程部門/生產管制處/生管二課</dptname>
<level>2</level>
</employee>
<employee empid="89056">
<cname>蘇阿信</cname>
<costcode>3220</costcode>
<dptname>生產工程部門/生產管制處/生管二課</dptname>
<level>1</level>
</employee>
<employee empid="22005">
<cname>李筠瞳</cname>
<costcode>3220</costcode>
<dptname>生產工程部門/生產管制處/生管二課</dptname>
<level>1</level>
</employee>
<employee empid="96048">
<cname>賴德明</cname>
<costcode>3230</costcode>
<dptname>生產工程部門/生產管制處/包裝課</dptname>
<level>2</level>
</employee>
<employee empid="87112">
<cname>黃進福</cname>
<costcode>3230</costcode>
<dptname>生產工程部門/生產管制處/包裝課</dptname>
<level>1</level>
</employee>
<employee empid="98016">
<cname>陳乾坤</cname>
<costcode>3230</costcode>
<dptname>生產工程部門/生產管制處/包裝課</dptname>
<level>1</level>
</employee>
<employee empid="88242">
<cname>洪寶生</cname>
<costcode>3230</costcode>
<dptname>生產工程部門/生產管制處/包裝課</dptname>
<level>1</level>
</employee>
<employee empid="89077">
<cname>劉進丁</cname>
<costcode>3230</costcode>
<dptname>生產工程部門/生產管制處/包裝課</dptname>
<level>1</level>
</employee>
<employee empid="87128">
<cname>陳文卿</cname>
<costcode>3230</costcode>
<dptname>生產工程部門/生產管制處/包裝課</dptname>
<level>1</level>
</employee>
<employee empid="88258">
<cname>黃添晋</cname>
<costcode>3230</costcode>
<dptname>生產工程部門/生產管制處/包裝課</dptname>
<level>1</level>
</employee>
<employee empid="19001">
<cname>洪崇傑</cname>
<costcode>3230</costcode>
<dptname>生產工程部門/生產管制處/包裝課</dptname>
<level>1</level>
</employee>
<employee empid="99015">
<cname>黃英傑</cname>
<costcode>4000</costcode>
<dptname>技術開發部</dptname>
<level>4</level>
</employee>
<employee empid="01006">
<cname>謝俊德</cname>
<costcode>4100</costcode>
<dptname>技術開發部/技術處</dptname>
<level>3</level>
</employee>
<employee empid="98028">
<cname>謝斧護</cname>
<costcode>4110</costcode>
<dptname>技術開發部/技術處/冷軋技術課</dptname>
<level>2</level>
</employee>
<employee empid="23002">
<cname>張毓修</cname>
<costcode>4110</costcode>
<dptname>技術開發部/技術處/冷軋技術課</dptname>
<level>1</level>
</employee>
<employee empid="12004">
<cname>張世勳</cname>
<costcode>4120</costcode>
<dptname>技術開發部/技術處/鍍鋅技術課</dptname>
<level>2</level>
</employee>
<employee empid="18041">
<cname>蘇椲喬</cname>
<costcode>4120</costcode>
<dptname>技術開發部/技術處/鍍鋅技術課</dptname>
<level>1</level>
</employee>
<employee empid="21050">
<cname>鄭葦杭</cname>
<costcode>4120</costcode>
<dptname>技術開發部/技術處/鍍鋅技術課</dptname>
<level>1</level>
</employee>
<employee empid="14021">
<cname>龔裕隆</cname>
<costcode>4130</costcode>
<dptname>技術開發部/技術處/烤漆技術課</dptname>
<level>2</level>
</employee>
<employee empid="10003">
<cname>單雯青</cname>
<costcode>4130</costcode>
<dptname>技術開發部/技術處/烤漆技術課</dptname>
<level>2</level>
</employee>
<employee empid="92040">
<cname>廖莉婷</cname>
<costcode>4130</costcode>
<dptname>技術開發部/技術處/烤漆技術課</dptname>
<level>1</level>
</employee>
<employee empid="94057">
<cname>秦大維</cname>
<costcode>4130</costcode>
<dptname>技術開發部/技術處/烤漆技術課</dptname>
<level>1</level>
</employee>
<employee empid="22025">
<cname>劉汶錞</cname>
<costcode>4130</costcode>
<dptname>技術開發部/技術處/烤漆技術課</dptname>
<level>1</level>
</employee>
<employee empid="08005">
<cname>蕭琦諳</cname>
<costcode>4140</costcode>
<dptname>技術開發部/實驗課</dptname>
<level>2</level>
</employee>
<employee empid="85123">
<cname>張子政</cname>
<costcode>4140</costcode>
<dptname>技術開發部/實驗課</dptname>
<level>1</level>
</employee>
<employee empid="93047">
<cname>郭淑雅</cname>
<costcode>4140</costcode>
<dptname>技術開發部/實驗課</dptname>
<level>1</level>
</employee>
<employee empid="98011">
<cname>薛凱文</cname>
<costcode>4140</costcode>
<dptname>技術開發部/實驗課</dptname>
<level>1</level>
</employee>
<employee empid="92053">
<cname>劉寶全</cname>
<costcode>4140</costcode>
<dptname>技術開發部/實驗課</dptname>
<level>1</level>
</employee>
<employee empid="96022">
<cname>黃傳誼</cname>
<costcode>4140</costcode>
<dptname>技術開發部/實驗課</dptname>
<level>1</level>
</employee>
<employee empid="97042">
<cname>吳慶祝</cname>
<costcode>4140</costcode>
<dptname>技術開發部/實驗課</dptname>
<level>1</level>
</employee>
<employee empid="23014">
<cname>吳士鵬</cname>
<costcode>4140</costcode>
<dptname>技術開發部/實驗課</dptname>
<level>1</level>
</employee>
<employee empid="90025">
<cname>黃振東</cname>
<costcode>4200</costcode>
<dptname>技術開發部/技術服務處</dptname>
<level>3</level>
</employee>
<employee empid="86116">
<cname>陳惠鈴</cname>
<costcode>4200</costcode>
<dptname>技術開發部/技術服務處</dptname>
<level>1</level>
</employee>
<employee empid="93057">
<cname>張宗滿</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>2</level>
</employee>
<employee empid="11011">
<cname>陳奕助</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="19011">
<cname>楊宗倫</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="16003">
<cname>翁上禾</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="93019">
<cname>林建忠</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="95007">
<cname>盧福進</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="15025">
<cname>陳厚銓</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="92079">
<cname>高舜洲</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="16019">
<cname>劉宗遠</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="11009">
<cname>黃昱維</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="00005">
<cname>戴漢崇</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="16016">
<cname>葉晉紘</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="05004">
<cname>蔡明勳</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="96010">
<cname>林威志</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="22036">
<cname>葉子謙</cname>
<costcode>4210</costcode>
<dptname>技術開發部/技術服務處/服務一課</dptname>
<level>1</level>
</employee>
<employee empid="08012">
<cname>鄭維昌</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>2</level>
</employee>
<employee empid="90046">
<cname>洪金龍</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="00006">
<cname>洪宏欽</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="07003">
<cname>方子約</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="85210">
<cname>蔡崇文</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="92078">
<cname>林明川</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="14041">
<cname>黃應興</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="07004">
<cname>林義程</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="90031">
<cname>張建清</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="20004">
<cname>陳俊宏</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="20018">
<cname>李朝聖</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="20019">
<cname>林育安</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="20028">
<cname>黃登瑋</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="21020">
<cname>傅宏霖</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="22023">
<cname>陳錦德</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="23031">
<cname>胡宸偉</cname>
<costcode>4220</costcode>
<dptname>技術開發部/技術服務處/服務二課</dptname>
<level>1</level>
</employee>
<employee empid="93012">
<cname>張釋旭</cname>
<costcode>4230</costcode>
<dptname>技術開發部/技術服務處/精整課</dptname>
<level>2</level>
</employee>
<employee empid="96019">
<cname>蔡天源</cname>
<costcode>4230</costcode>
<dptname>技術開發部/技術服務處/精整課</dptname>
<level>1</level>
</employee>
<employee empid="88259">
<cname>洪國泰</cname>
<costcode>4230</costcode>
<dptname>技術開發部/技術服務處/精整課</dptname>
<level>1</level>
</employee>
<employee empid="14023">
<cname>張簡世温</cname>
<costcode>4230</costcode>
<dptname>技術開發部/技術服務處/精整課</dptname>
<level>1</level>
</employee>
<employee empid="92076">
<cname>蘇順能</cname>
<costcode>4230</costcode>
<dptname>技術開發部/技術服務處/精整課</dptname>
<level>1</level>
</employee>
<employee empid="86028">
<cname>王文智</cname>
<costcode>4230</costcode>
<dptname>技術開發部/技術服務處/精整課</dptname>
<level>1</level>
</employee>
<employee empid="89030">
<cname>龔燕龍</cname>
<costcode>4230</costcode>
<dptname>技術開發部/技術服務處/精整課</dptname>
<level>1</level>
</employee>
<employee empid="21010">
<cname>林右承</cname>
<costcode>4230</costcode>
<dptname>技術開發部/技術服務處/精整課</dptname>
<level>1</level>
</employee>
<employee empid="92033">
<cname>吳昭瑢</cname>
<costcode>4300</costcode>
<dptname>技術開發部/產品研究發展處</dptname>
<level>3</level>
</employee>
<employee empid="02005">
<cname>朱嘉偉</cname>
<costcode>4310</costcode>
<dptname>技術開發部/產品研究發展處/研發一課</dptname>
<level>2</level>
</employee>
<employee empid="22009">
<cname>陳柏廷</cname>
<costcode>4310</costcode>
<dptname>技術開發部/產品研究發展處/研發一課</dptname>
<level>1</level>
</employee>
<employee empid="21028">
<cname>江志胤</cname>
<costcode>4320</costcode>
<dptname>技術開發部/產品研究發展處/研發二課</dptname>
<level>1</level>
</employee>
<employee empid="85196">
<cname>王圳弘</cname>
<costcode>9999</costcode>
<dptname>生產工程部門</dptname>
<level>5</level>
</employee>
<employee empid="18018">
<cname>北村宗一</cname>
<costcode>A000</costcode>
<dptname>董事會</dptname>
<level>7</level>
</employee>
<employee empid="95022">
<cname>廖文德</cname>
<costcode>A100</costcode>
<dptname>董事會/內部稽核室</dptname>
<level>3</level>
</employee>
<employee empid="06003">
<cname>陳文英</cname>
<costcode>A100</costcode>
<dptname>董事會/內部稽核室</dptname>
<level>2</level>
</employee>
<employee empid="23016">
<cname>吳沛霖</cname>
<costcode>A100</costcode>
<dptname>董事會/內部稽核室</dptname>
<level>1</level>
</employee>
<employee empid="86130">
<cname>洪世強</cname>
<costcode>B000</costcode>
<dptname>總經理室</dptname>
<level>6</level>
</employee>
<employee empid="20001">
<cname>川勝真一郎</cname>
<costcode>B000</costcode>
<dptname>總經理室</dptname>
<level>4</level>
</employee>
<employee empid="21013">
<cname>大山慧</cname>
<costcode>B000</costcode>
<dptname>總經理室</dptname>
<level>4</level>
</employee>
<employee empid="87044">
<cname>李韻平</cname>
<costcode>B000</costcode>
<dptname>總經理室</dptname>
<level>3</level>
</employee>
<employee empid="12003">
<cname>胡萱苡</cname>
<costcode>B000</costcode>
<dptname>總經理室</dptname>
<level>2</level>
</employee>
<employee empid="22018">
<cname>徐筱晴</cname>
<costcode>B000</costcode>
<dptname>總經理室</dptname>
<level>1</level>
</employee>
<employee empid="90022">
<cname>方銘材</cname>
<costcode>H000</costcode>
<dptname>資訊部</dptname>
<level>4</level>
</employee>
<employee empid="98023">
<cname>陳光和</cname>
<costcode>S000</costcode>
<dptname>工業安全室</dptname>
<level>4</level>
</employee>
<employee empid="00036">
<cname>鄭景文</cname>
<costcode>F000</costcode>
<dptname>業務部</dptname>
<level>4</level>
</employee>
<employee empid="89015">
<cname>蔡登俊</cname>
<costcode>L000</costcode>
<dptname>資材部</dptname>
<level>4</level>
</employee>
<employee empid="92055">
<cname>陳景熙</cname>
<costcode>D000</costcode>
<dptname>財務會計部</dptname>
<level>4</level>
</employee>
<employee empid="18015">
<cname>郭佩瑜</cname>
<costcode>D100</costcode>
<dptname>財務會計部/會計處</dptname>
<level>3</level>
</employee>
<employee empid="85067">
<cname>梁月華</cname>
<costcode>D110</costcode>
<dptname>財務會計部/會計處/成本課</dptname>
<level>2</level>
</employee>
<employee empid="94008">
<cname>魏雅惠</cname>
<costcode>D110</costcode>
<dptname>財務會計部/會計處/成本課</dptname>
<level>1</level>
</employee>
<employee empid="88251">
<cname>李翊慈</cname>
<costcode>D110</costcode>
<dptname>財務會計部/會計處/成本課</dptname>
<level>1</level>
</employee>
<employee empid="11003">
<cname>曾鈺芳</cname>
<costcode>D120</costcode>
<dptname>財務會計部/會計處/帳務課</dptname>
<level>2</level>
</employee>
<employee empid="88245">
<cname>梁金瓊</cname>
<costcode>D120</costcode>
<dptname>財務會計部/會計處/帳務課</dptname>
<level>1</level>
</employee>
<employee empid="12010">
<cname>楊蕙慈</cname>
<costcode>D120</costcode>
<dptname>財務會計部/會計處/帳務課</dptname>
<level>1</level>
</employee>
<employee empid="22006">
<cname>謝孟達</cname>
<costcode>D130</costcode>
<dptname>財務會計部/會計處/財務會計規劃課</dptname>
<level>2</level>
</employee>
<employee empid="86166">
<cname>蔡美惠</cname>
<costcode>D130</costcode>
<dptname>財務會計部/會計處/財務會計規劃課</dptname>
<level>1</level>
</employee>
<employee empid="93009">
<cname>陳順良</cname>
<costcode>D200</costcode>
<dptname>財務會計部/財務處</dptname>
<level>3</level>
</employee>
<employee empid="22035">
<cname>林伯融</cname>
<costcode>D200</costcode>
<dptname>財務會計部/財務處</dptname>
<level>1</level>
</employee>
<employee empid="94037">
<cname>陳靜惠</cname>
<costcode>D210</costcode>
<dptname>財務會計部/財務處/資金暨股務課</dptname>
<level>2</level>
</employee>
<employee empid="93023">
<cname>吳美秀</cname>
<costcode>D210</costcode>
<dptname>財務會計部/財務處/資金暨股務課</dptname>
<level>1</level>
</employee>
<employee empid="22033">
<cname>陳佳君</cname>
<costcode>D210</costcode>
<dptname>財務會計部/財務處/資金暨股務課</dptname>
<level>1</level>
</employee>
<employee empid="96031">
<cname>李漢宗</cname>
<costcode>E000</costcode>
<dptname>行政部</dptname>
<level>1</level>
</employee>
<employee empid="93064">
<cname>張景智</cname>
<costcode>E200</costcode>
<dptname>行政部/總務處</dptname>
<level>3</level>
</employee>
<employee empid="88158">
<cname>楊士賢</cname>
<costcode>E210</costcode>
<dptname>行政部/總務處/庶務課</dptname>
<level>2</level>
</employee>
<employee empid="92031">
<cname>吳米娥</cname>
<costcode>E210</costcode>
<dptname>行政部/總務處/庶務課</dptname>
<level>1</level>
</employee>
<employee empid="92006">
<cname>鍾莉香</cname>
<costcode>E210</costcode>
<dptname>行政部/總務處/庶務課</dptname>
<level>1</level>
</employee>
<employee empid="85193">
<cname>曾鳳珠</cname>
<costcode>E230</costcode>
<dptname>行政部/總務處/公共事務課</dptname>
<level>1</level>
</employee>
<employee empid="97034">
<cname>佘文誠</cname>
<costcode>E230</costcode>
<dptname>行政部/總務處/公共事務課</dptname>
<level>1</level>
</employee>
<employee empid="85059">
<cname>吳基福</cname>
<costcode>E230</costcode>
<dptname>行政部/總務處/公共事務課</dptname>
<level>1</level>
</employee>
<employee empid="93051">
<cname>李坤</cname>
<costcode>E300</costcode>
<dptname>行政部/人力資源處</dptname>
<level>3</level>
</employee>
<employee empid="87077">
<cname>陳麗玲</cname>
<costcode>E310</costcode>
<dptname>行政部/人力資源處/人事課</dptname>
<level>2</level>
</employee>
<employee empid="07022">
<cname>張維琳</cname>
<costcode>E310</costcode>
<dptname>行政部/人力資源處/人事課</dptname>
<level>1</level>
</employee>
<employee empid="90054">
<cname>張鳳娟</cname>
<costcode>E310</costcode>
<dptname>行政部/人力資源處/人事課</dptname>
<level>1</level>
</employee>
<employee empid="22026">
<cname>黃詩晴</cname>
<costcode>E310</costcode>
<dptname>行政部/人力資源處/人事課</dptname>
<level>1</level>
</employee>
<employee empid="00044">
<cname>李俊穎</cname>
<costcode>E320</costcode>
<dptname>行政部/人力資源處/人力發展課</dptname>
<level>2</level>
</employee>
<employee empid="86158">
<cname>許乃允</cname>
<costcode>E320</costcode>
<dptname>行政部/人力資源處/人力發展課</dptname>
<level>1</level>
</employee>
<employee empid="06011">
<cname>張智傑</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>3</level>
</employee>
<employee empid="97001">
<cname>張琇雯</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>1</level>
</employee>
<employee empid="12007">
<cname>陳宥翰</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>1</level>
</employee>
<employee empid="15009">
<cname>陳冠甫</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>1</level>
</employee>
<employee empid="88243">
<cname>王富美</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>1</level>
</employee>
<employee empid="21003">
<cname>陳翰宇</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>1</level>
</employee>
<employee empid="22030">
<cname>林郁潔</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>1</level>
</employee>
<employee empid="23003">
<cname>莊侑勝</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>1</level>
</employee>
<employee empid="23017">
<cname>謝宛婷</cname>
<costcode>F100</costcode>
<dptname>業務部/國內業務處</dptname>
<level>1</level>
</employee>
<employee empid="06009">
<cname>楊舜仁</cname>
<costcode>F120</costcode>
<dptname>業務部/國內業務處/南區銷售課</dptname>
<level>2</level>
</employee>
<employee empid="01044">
<cname>蔡鴻銘</cname>
<costcode>F200</costcode>
<dptname>營業部門/銷售管理處</dptname>
<level>3</level>
</employee>
<employee empid="87056">
<cname>李淑敏</cname>
<costcode>F200</costcode>
<dptname>營業部門/銷售管理處</dptname>
<level>2</level>
</employee>
<employee empid="99011">
<cname>陳昱锝</cname>
<costcode>F210</costcode>
<dptname>營業部門/銷售管理處/地磅</dptname>
<level>1</level>
</employee>
<employee empid="92007">
<cname>張雅惠</cname>
<costcode>F210</costcode>
<dptname>營業部門/銷售管理處/地磅</dptname>
<level>1</level>
</employee>
<employee empid="96007">
<cname>張啟輝</cname>
<costcode>F210</costcode>
<dptname>營業部門/銷售管理處/地磅</dptname>
<level>1</level>
</employee>
<employee empid="05002">
<cname>洪菁陽</cname>
<costcode>F210</costcode>
<dptname>營業部門/銷售管理處/地磅</dptname>
<level>1</level>
</employee>
<employee empid="21024">
<cname>林士傑</cname>
<costcode>F210</costcode>
<dptname>營業部門/銷售管理處/地磅</dptname>
<level>1</level>
</employee>
<employee empid="00018">
<cname>郭姿妤</cname>
<costcode>F220</costcode>
<dptname>營業部門/銷售管理處/銷售管理課</dptname>
<level>2</level>
</employee>
<employee empid="96004">
<cname>郭澍妤</cname>
<costcode>F220</costcode>
<dptname>營業部門/銷售管理處/銷售管理課</dptname>
<level>1</level>
</employee>
<employee empid="98005">
<cname>許富華</cname>
<costcode>F220</costcode>
<dptname>營業部門/銷售管理處/銷售管理課</dptname>
<level>1</level>
</employee>
<employee empid="03001">
<cname>洪信昌</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>2</level>
</employee>
<employee empid="08008">
<cname>林軒憶</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="18038">
<cname>李泓德</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="92041">
<cname>顧懋貴</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="06004">
<cname>黃傳達</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="01001">
<cname>張芳騏</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="87137">
<cname>黃耀賢</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="15005">
<cname>張君豪</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="96002">
<cname>張興泰</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="96037">
<cname>張世男</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="06017">
<cname>邱虹如</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="14003">
<cname>洪銘志</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="21031">
<cname>楊宗翰</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="22034">
<cname>黃碩賢</cname>
<costcode>F230</costcode>
<dptname>營業部門/銷售管理處/倉儲課</dptname>
<level>1</level>
</employee>
<employee empid="08010">
<cname>郭泓志</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>3</level>
</employee>
<employee empid="86057">
<cname>陳君慧</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>1</level>
</employee>
<employee empid="96041">
<cname>李佳齡</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>1</level>
</employee>
<employee empid="96008">
<cname>張慧婷</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>1</level>
</employee>
<employee empid="22021">
<cname>吳東澤</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>1</level>
</employee>
<employee empid="23013">
<cname>蔡宗諭</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>1</level>
</employee>
<employee empid="23038">
<cname>林宜萱</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>1</level>
</employee>
<employee empid="23037">
<cname>陳瑋筠</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>1</level>
</employee>
<employee empid="23036">
<cname>蘇玲瑩</cname>
<costcode>F400</costcode>
<dptname>業務部/國際業務處</dptname>
<level>1</level>
</employee>
<employee empid="06023">
<cname>吳佩婷</cname>
<costcode>F440</costcode>
<dptname>業務部/國際業務處/業務二課</dptname>
<level>2</level>
</employee>
<employee empid="95034">
<cname>楊東龍</cname>
<costcode>F700</costcode>
<dptname>業務部/營業企劃處</dptname>
<level>3</level>
</employee>
<employee empid="22031">
<cname>余宛芩</cname>
<costcode>F700</costcode>
<dptname>業務部/營業企劃處</dptname>
<level>1</level>
</employee>
<employee empid="10002">
<cname>黃淑芬</cname>
<costcode>F710</costcode>
<dptname>業務部/營業企劃處/企劃課</dptname>
<level>1</level>
</employee>
<employee empid="04005">
<cname>周俊男</cname>
<costcode>F720</costcode>
<dptname>業務部/營業企劃處/市場調查課</dptname>
<level>2</level>
</employee>
<employee empid="88016">
<cname>林同志</cname>
<costcode>F999</costcode>
<dptname>營業部門</dptname>
<level>5</level>
</employee>
<employee empid="94071">
<cname>洪志坪</cname>
<costcode>G000</costcode>
<dptname>中國事業部</dptname>
<level>4</level>
</employee>
<employee empid="94033">
<cname>陳品臻</cname>
<costcode>G100</costcode>
<dptname>中國事業部/中國業務處</dptname>
<level>1</level>
</employee>
<employee empid="93025">
<cname>何家旺</cname>
<costcode>G120</costcode>
<dptname>中國事業部/中國業務處/銷售課</dptname>
<level>2</level>
</employee>
<employee empid="88150">
<cname>石孟勳</cname>
<costcode>H000</costcode>
<dptname>資訊部</dptname>
<level>3</level>
</employee>
<employee empid="95009">
<cname>林志益</cname>
<costcode>H100</costcode>
<dptname>資訊部/系統資源處</dptname>
<level>3</level>
</employee>
<employee empid="89079">
<cname>楊添龍</cname>
<costcode>H110</costcode>
<dptname>資訊部/系統資源處/系統資源一課</dptname>
<level>2</level>
</employee>
<employee empid="98017">
<cname>郭鐘尹</cname>
<costcode>H110</costcode>
<dptname>資訊部/系統資源處/系統資源一課</dptname>
<level>2</level>
</employee>
<employee empid="95008">
<cname>楊仁山</cname>
<costcode>H110</costcode>
<dptname>資訊部/系統資源處/系統資源一課</dptname>
<level>1</level>
</employee>
<employee empid="94003">
<cname>陳建樺</cname>
<costcode>H110</costcode>
<dptname>資訊部/系統資源處/系統資源一課</dptname>
<level>1</level>
</employee>
<employee empid="23029">
<cname>周仕睿</cname>
<costcode>H110</costcode>
<dptname>資訊部/系統資源處/系統資源一課</dptname>
<level>1</level>
</employee>
<employee empid="98012">
<cname>陳良安</cname>
<costcode>H120</costcode>
<dptname>資訊部/系統資源處/系統資源二課</dptname>
<level>2</level>
</employee>
<employee empid="98018">
<cname>劉靜怡</cname>
<costcode>H120</costcode>
<dptname>資訊部/系統資源處/系統資源二課</dptname>
<level>1</level>
</employee>
<employee empid="22012">
<cname>林俊佑</cname>
<costcode>H120</costcode>
<dptname>資訊部/系統資源處/系統資源二課</dptname>
<level>1</level>
</employee>
<employee empid="93030">
<cname>莊國鑫</cname>
<costcode>H400</costcode>
<dptname>資訊部/系統服務處</dptname>
<level>3</level>
</employee>
<employee empid="91021">
<cname>李文玲</cname>
<costcode>H400</costcode>
<dptname>資訊部/系統服務處</dptname>
<level>2</level>
</employee>
<employee empid="92034">
<cname>林財旺</cname>
<costcode>H410</costcode>
<dptname>資訊部/系統服務處/系統服務一課</dptname>
<level>2</level>
</employee>
<employee empid="98027">
<cname>葉家駿</cname>
<costcode>H410</costcode>
<dptname>資訊部/系統服務處/系統服務一課</dptname>
<level>2</level>
</employee>
<employee empid="89087">
<cname>葉貞妙</cname>
<costcode>H410</costcode>
<dptname>資訊部/系統服務處/系統服務一課</dptname>
<level>1</level>
</employee>
<employee empid="22004">
<cname>詹勝光</cname>
<costcode>H410</costcode>
<dptname>資訊部/系統服務處/系統服務一課</dptname>
<level>1</level>
</employee>
<employee empid="99009">
<cname>林坤郁</cname>
<costcode>H420</costcode>
<dptname>資訊部/系統服務處/系統服務二課</dptname>
<level>2</level>
</employee>
<employee empid="95029">
<cname>簡國忠</cname>
<costcode>H420</costcode>
<dptname>資訊部/系統服務處/系統服務二課</dptname>
<level>1</level>
</employee>
<employee empid="97008">
<cname>葉淑華</cname>
<costcode>H420</costcode>
<dptname>資訊部/系統服務處/系統服務二課</dptname>
<level>1</level>
</employee>
<employee empid="93028">
<cname>吳明鴻</cname>
<costcode>I000</costcode>
<dptname>新事業開發部</dptname>
<level>4</level>
</employee>
<employee empid="00001">
<cname>許忠暉</cname>
<costcode>I000</costcode>
<dptname>新事業開發部</dptname>
<level>3</level>
</employee>
<employee empid="00045">
<cname>陳植翰</cname>
<costcode>J100</costcode>
<dptname>原料部/原料處</dptname>
<level>3</level>
</employee>
<employee empid="97017">
<cname>張芬芬</cname>
<costcode>J110</costcode>
<dptname>原料部/原料處/原料採購課</dptname>
<level>2</level>
</employee>
<employee empid="05003">
<cname>林善潔</cname>
<costcode>J110</costcode>
<dptname>原料部/原料處/原料採購課</dptname>
<level>1</level>
</employee>
<employee empid="22032">
<cname>洪萱茹</cname>
<costcode>J110</costcode>
<dptname>原料部/原料處/原料採購課</dptname>
<level>1</level>
</employee>
<employee empid="08006">
<cname>林雄偉</cname>
<costcode>J120</costcode>
<dptname>原料部/原料處/貿易課</dptname>
<level>2</level>
</employee>
<employee empid="07009">
<cname>何國誌</cname>
<costcode>L100</costcode>
<dptname>資材部/資材處</dptname>
<level>3</level>
</employee>
<employee empid="92036">
<cname>李允政</cname>
<costcode>L100</costcode>
<dptname>資材部/資材處</dptname>
<level>2</level>
</employee>
<employee empid="07010">
<cname>梁志忠</cname>
<costcode>L110</costcode>
<dptname>資材部/資材處/倉庫課</dptname>
<level>2</level>
</employee>
<employee empid="89050">
<cname>黃淑貞</cname>
<costcode>L110</costcode>
<dptname>資材部/資材處/倉庫課</dptname>
<level>2</level>
</employee>
<employee empid="87129">
<cname>張如采</cname>
<costcode>L110</costcode>
<dptname>資材部/資材處/倉庫課</dptname>
<level>1</level>
</employee>
<employee empid="96027">
<cname>徐順發</cname>
<costcode>L110</costcode>
<dptname>資材部/資材處/倉庫課</dptname>
<level>1</level>
</employee>
<employee empid="21048">
<cname>李濟任</cname>
<costcode>L110</costcode>
<dptname>資材部/資材處/倉庫課</dptname>
<level>1</level>
</employee>
<employee empid="97039">
<cname>謝明哲</cname>
<costcode>L200</costcode>
<dptname>資材部/發包處</dptname>
<level>3</level>
</employee>
<employee empid="21051">
<cname>陳昱汛</cname>
<costcode>L210</costcode>
<dptname>資材部/發包處/發包課</dptname>
<level>2</level>
</employee>
<employee empid="85201">
<cname>郭麗萍</cname>
<costcode>L210</costcode>
<dptname>資材部/發包處/發包課</dptname>
<level>1</level>
</employee>
<employee empid="94063">
<cname>林詠川</cname>
<costcode>L220</costcode>
<dptname>資材部/發包處/採購課</dptname>
<level>2</level>
</employee>
<employee empid="85140">
<cname>周女媚</cname>
<costcode>L220</costcode>
<dptname>資材部/發包處/採購課</dptname>
<level>1</level>
</employee>
<employee empid="23039">
<cname>王姿尹</cname>
<costcode>L220</costcode>
<dptname>資材部/發包處/採購課</dptname>
<level>1</level>
</employee>
<employee empid="95035">
<cname>陳世銘</cname>
<costcode>S100</costcode>
<dptname>工業安全室</dptname>
<level>3</level>
</employee>
<employee empid="93034">
<cname>張達忠</cname>
<costcode>S100</costcode>
<dptname>工業安全室</dptname>
<level>3</level>
</employee>
<employee empid="19016">
<cname>陳彥旭</cname>
<costcode>S110</costcode>
<dptname>工業安全室/工安課</dptname>
<level>1</level>
</employee>
<employee empid="23033">
<cname>佘子羽</cname>
<costcode>S110</costcode>
<dptname>工業安全室/工安課</dptname>
<level>1</level>
</employee>
<employee empid="17003">
<cname>佘銘祥</cname>
<costcode>S120</costcode>
<dptname>工業安全室/環境暨衛生課</dptname>
<level>2</level>
</employee>
<employee empid="16005">
<cname>辛玄珠</cname>
<costcode>S120</costcode>
<dptname>工業安全室/環境暨衛生課</dptname>
<level>1</level>
</employee>
</emprecords>`;

export const mockDataPromise = parseStringPromise(data);
