import { parseStringPromise } from "xml2js";

const data = `<?xml version="1.0" encoding="UTF-8"?>
<Result status="OK" ip="10.1.7.131">
<item_mst>
<item type="202">99856000001</item>
<description type="202">四層平面抗菌口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">99856000101</item>
<description type="202">口罩 活性碳型 佰奕牌</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998561001</item>
<description type="202">口罩 活性碳</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998561001A</item>
<description type="202">口罩 活性碳型 合同牌</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998562001A</item>
<description type="202">口罩 活性碳型 合同牌</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998562010</item>
<description type="202">口罩 活性碳</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998562020</item>
<description type="202">口罩 活性碳</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">99856239913</item>
<description type="202">口罩 碗型</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563D0000</item>
<description type="202">口罩-3D立體奈米</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M8210</item>
<description type="202">工業防塵口罩 3M 8210 N95</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M8246</item>
<description type="202">防酸口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M8247R95</item>
<description type="202">活性碳拋棄式防塵口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M8576</item>
<description type="202">摺疊式活性碳防塵口罩 (防酸性氣體-3M牌 8576型)</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M8577P95</item>
<description type="202">活性碳拋棄式防塵口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M9001</item>
<description type="202">摺疊式防塵口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M9041</item>
<description type="202">摺疊式活性碳防塵口罩 (有機蒸氣-3M牌 9041型)</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M9041V</item>
<description type="202">摺疊式活性碳防塵口罩 (有機蒸氣-3M牌 9041V型)</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M9541V</item>
<description type="202">摺疊式活性碳防塵口罩 (有機蒸氣-3M牌 9541V型)</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M9915</item>
<description type="202">防酸口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563M9918</item>
<description type="202">防塵口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563MAKN95511</item>
<description type="202">折疊式口罩 N95 SEKURA-511 (勾環式) (ROP)</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563MAKN95699</item>
<description type="202">折疊式口罩 N95 MAK-699 (勾環式)</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563N95WK911V</item>
<description type="202">3D 折疊式口罩 N95 WK-911V (帶閥)</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563UVEX2210</item>
<description type="202">罩杯式防塵口罩(有吐氣閥)</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998563UVEXC3220</item>
<description type="202">摺疊式防有機氣體口罩,附呼氣閥</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">998568505</item>
<description type="202">活性碳口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">99856DM50</item>
<description type="202">三層活性碳抗菌口罩</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">99856N1125AG</item>
<description type="202">防酸口罩,WILLSOBN牌N1125AG</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">99856N95A</item>
<description type="202">活性碳口罩 N95</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">99856N95B</item>
<description type="202">活性碳口罩 N95</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">99856NP12</item>
<description type="202">口罩 活性碳 NP-12K</description>
<u_m type="202">PC</u_m>
</item_mst>
<item_mst>
<item type="202">99856UV100</item>
<description type="202">防曬萬用護頸布</description>
<u_m type="202">PC</u_m>
</item_mst>
<Rec_No>32</Rec_No>
</Result>`;

export const mockDataPromise = parseStringPromise(data);
