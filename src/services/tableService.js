import { utilsService } from "./utils-service";

export default {
    onClickTitle,
    getKeyByValue,
    getFilterOptions,
    getFilteredJson,
};

const csv = `Stock NO,Shape,Carat,Clarity,Color,Cut,Polish,Symmetry,Fluorescent,CULET,Location,ImageLink,CertificateLink,VideoLink,PPC,Total Price
1126817,ROUND,0.23,VVS1,E,EX,EX,VG,M,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6302669024.jpg,,1497.02,344.3
1126816,ROUND,0.23,VVS1,E,EX,VG,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1309673047.jpg,,1613.13,371.0
1126813,ROUND,0.23,VVS1,E,VG,EX,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6305672965.jpg,,1579.13,363.
1126814,ROUND,0.23,VVS1,E,EX,EX,VG,M,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6302672964.jpg,,1497.02,344.3
1126808,ROUND,0.23,VVS1,F,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1313491701.jpg,,1565.02,359.9
1126807,ROUND,0.23,VVS1,F,EX,EX,EX,M,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/7303669422.jpg,,1487.16,342.0
1118299,ROUND,0.23,VVS1,F,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6312051527.jpg,,1495.15,343.8
1126809,ROUND,0.23,VVS1,F,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6305672985.jpg,,1613.13,371.0
1072060,HEART,0.23,VVS2,F,EX,EX,EX,M,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2307481337.jpg,,1215.16,279.4
1082614,ROUND,0.23,VVS2,F,EX,EX,EX,ST,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1309949419.jpg,,1140.02,262.
1111164,ROUND,0.23,SI1,G,VG,EX,GD,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/5316083558.jpg,,948.88,218.2
1126804,ROUND,0.23,VVS1,H,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6315490907.jpg,,1297.05,298.3
1126811,ROUND,0.24,VVS1,E,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/7316492056.jpg,,1838.89,441.3
1126812,ROUND,0.24,VVS1,E,VG,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6301669391.jpg,,1678.07,402.7
1082543,ROUND,0.24,SI1,E,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6302904198.jpg,,1021.97,245.2
1126806,ROUND,0.24,VVS1,F,EX,EX,EX,F,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2316491026.jpg,,1762.9,423.
1126789,ROUND,0.24,VVS2,G,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1315494919.jpg,,1338,321.1
1126820,ROUND,0.24,VVS1,D,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1305673186.jpg,,1740.97,417.8
1126810,ROUND,0.25,VVS1,E,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1308673338.jpg,,1864.9,466.2
1126784,ROUND,0.25,VS1,G,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6305672979.jpg,,1346.93,336.7
1126796,ROUND,0.27,VVS2,D,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/7303673043.jpg,,1823.93,492.4
988608,ROUND,0.28,I2,FANCY,EX,VG,GD,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/988608.jpg,https://diamanti.s3.amazonaws.com/certificates/6291296567.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=988608,2449,685.7
1135717,ROUND,0.29,VS2,F,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182309-771.jpg,https://diamanti.s3.amazonaws.com/certificates/7316740268.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182309-771,1677,486.3
1140804,ROUND,0.29,SI1,H,EX,VG,EX,F,N,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1315820817.jpg,,1405.88,407.7
1027639,ROUND,0.29,VVS2,I,EX,VG,EX,N,N,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2306274257.jpg,,1105.08,320.4
1150664,ROUND,0.29,VS2,D,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183343-760.jpg,https://diamanti.s3.amazonaws.com/certificates/2317904160.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183343-760,1845,535.0
1014186,ROUND,0.3,VVS2,FANCY,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182137-1023.jpg,https://diamanti.s3.amazonaws.com/certificates/2296803159.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182137-1023,1295,388.
1066153,ROUND,0.3,VS1,FANCY,EX,VG,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183192-726.jpg,https://diamanti.s3.amazonaws.com/certificates/1308558920.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183192-726,1358,407.
1150560,ROUND,0.3,VS2,FANCY,EX,EX,VG,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183313-943.jpg,https://diamanti.s3.amazonaws.com/certificates/1315666447.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183313-943,1648,494.
1111036,ROUND,0.3,VS2,FANCY,VG,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/7308643715.jpg,,1414,424.
1069048,ROUND,0.3,VS2,FANCY,VG,EX,VG,ST,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2287123307.jpg,,1457,437.
1069016,ROUND,0.3,SI1,FANCY,GD,VG,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/7301403186.jpg,,667,200.
988326,ROUND,0.3,SI2,FANCY,EX,GD,GD,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/988326.jpg,https://diamanti.s3.amazonaws.com/certificates/5296297128.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=988326,875,262.
1110787,ROUND,0.3,SI2,FANCY,VG,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1303942083.jpg,,1350,40
1086600,ROUND,0.3,VS1,S-T,VG,VG,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6312009561.jpg,,499,149.
1041143,ROUND,0.3,VS1,S-T,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2306293106.jpg,,704,211.
1071908,ROUND,0.3,VVS1,Q-R,EX,EX,EX,F,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1305642889.jpg,,683,204.
1049183,ROUND,0.3,VS1,Q-R,GD,VG,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2304498269.jpg,,527,158.
1033409,ROUND,0.3,VS2,Q-R,EX,EX,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/7308108313.jpg,,502,150.
1153752,ROUND,0.3,IF,E,VG,EX,VG,N,NONE,MUMBAI,,,,1710,51
1153732,ROUND,0.3,VVS1,E,VG,EX,VG,N,NONE,MUMBAI,,,,1680,50
1126756,ROUND,0.3,VVS1,E,EX,EX,EX,F,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6311518041.jpg,,1769.04,530.7
1153733,ROUND,0.3,VVS1,E,EX,EX,EX,F,NONE,MUMBAI,,,,1764,529.
1131903,ROUND,0.3,VVS1,E,EX,EX,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6315523383.jpg,,1847.16,554.1
1126751,ROUND,0.3,VVS1,E,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6311551800.jpg,,1929.2,578.7
1126753,ROUND,0.3,VVS1,E,EX,EX,EX,M,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2317551657.jpg,,1655.08,496.5
1131906,ROUND,0.3,VVS1,E,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1319473370.jpg,,1955.24,586.5
1126752,ROUND,0.3,VVS1,E,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2316522919.jpg,,1956.08,586.8
1153734,ROUND,0.3,VVS1,E,EX,EX,EX,N,NONE,MUMBAI,,,,1988,596.
1130244,ROUND,0.3,VVS1,E,EX,EX,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6311465341.jpg,,1820,54
1142465,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/181272-296.jpg,https://diamanti.s3.amazonaws.com/certificates/6312821798.jpg,,2028.04,608.4
1152611,ROUND,0.3,VVS1,E,EX,EX,VG,N,NONE,MUMBAI,,,,1876,562.
1152612,ROUND,0.3,VVS1,E,EX,EX,VG,N,NONE,MUMBAI,,,,1848,554.
1154253,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/192001-2677.jpg,,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=192001-2677,1988,596.
1155320,ROUND,0.3,VVS1,E,EX,EX,EX,F,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/192001-2926.jpg,,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=192001-2926,1876,562.
1124034,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182300-677.jpg,https://diamanti.s3.amazonaws.com/certificates/6311596694.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182300-677,1923.04,576.9
1135708,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6311731363.jpg,,1995,598.
1147477,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182316-551.jpg,https://diamanti.s3.amazonaws.com/certificates/6311839575.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182316-551,1981,594.
1137972,ROUND,0.3,VVS1,E,EX,EX,VG,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182318-391.jpg,https://diamanti.s3.amazonaws.com/certificates/5316774979.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182318-391,1786.12,535.8
1135707,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/2314707694.jpg,,1967,590.
1143973,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182318-515.jpg,https://diamanti.s3.amazonaws.com/certificates/6312814621.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182318-515,2028.04,608.4
1143972,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183327-505.jpg,https://diamanti.s3.amazonaws.com/certificates/2317814556.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183327-505,2001.16,600.3
1147478,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182316-989.jpg,https://diamanti.s3.amazonaws.com/certificates/2317839585.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182316-989,2009,602.
1124560,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180892-317.jpg,https://diamanti.s3.amazonaws.com/certificates/6312649841.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=180892-317,1950.2,585.0
1124562,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182302-338.jpg,https://diamanti.s3.amazonaws.com/certificates/2314666475.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182302-338,1975.12,592.5
1134373,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180940-969.jpg,https://diamanti.s3.amazonaws.com/certificates/1317707724.jpg,,1940.12,582.0
1149642,ROUND,0.3,VVS1,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182321-1016.jpg,https://diamanti.s3.amazonaws.com/certificates/1315877945.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182321-1016,1988,596.
1124542,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182297-987.jpg,https://diamanti.s3.amazonaws.com/certificates/7316649989.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182297-987,1880.01,56
1135670,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180935-548.jpg,https://diamanti.s3.amazonaws.com/certificates/6312740020.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=180935-548,1923.21,576.9
1124543,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182297-896.jpg,https://diamanti.s3.amazonaws.com/certificates/1313650988.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182297-896,1880.01,56
1134355,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/181262-342.jpg,https://diamanti.s3.amazonaws.com/certificates/7311695255.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=181262-342,1923.21,576.9
1137948,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183322-689.jpg,https://diamanti.s3.amazonaws.com/certificates/2316771693.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183322-689,1934.01,580.
1124541,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180940-656.jpg,https://diamanti.s3.amazonaws.com/certificates/7312648549.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=180940-656,1905.12,571.5
1143951,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180389-161.jpg,https://diamanti.s3.amazonaws.com/certificates/6312837274.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=180389-161,1973.16,591.9
1146434,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182159-611.jpg,https://diamanti.s3.amazonaws.com/certificates/1309175093.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182159-611,1937.25,581.1
1143952,ROUND,0.3,VVS2,E,EX,EX,EX,F,N,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/7311814188.jpg,,1822.23,546.6
1147455,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182316-918.jpg,https://diamanti.s3.amazonaws.com/certificates/5313839365.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182316-918,1964.25,589.2
1137947,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183320-553.jpg,https://diamanti.s3.amazonaws.com/certificates/6311771487.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183320-553,1934.01,580.
1147458,ROUND,0.3,VVS2,E,EX,EX,VG,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183335-1339.jpg,https://diamanti.s3.amazonaws.com/certificates/7311866061.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183335-1339,1695.06,508.5
1121248,ROUND,0.3,VVS2,E,EX,EX,EX,N,VSM,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180898-338.jpg,https://diamanti.s3.amazonaws.com/certificates/2317569033.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=180898-338,1893.24,567.9
1147460,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183334-2537.jpg,https://diamanti.s3.amazonaws.com/certificates/5313865995.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183334-2537,1937.25,581.1
1154247,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183343-1518.jpg,,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183343-1518,1944,583.
1150653,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183339-1176.jpg,https://diamanti.s3.amazonaws.com/certificates/6312901218.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183339-1176,1917,575.
1123387,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182294-1032.jpg,https://diamanti.s3.amazonaws.com/certificates/6315574196.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182294-1032,1850.04,555.0
1130692,OVAL,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180937-565.jpg,https://diamanti.s3.amazonaws.com/certificates/6312676985.jpg,,1938.06,581.4
1123386,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180905-493.jpg,https://diamanti.s3.amazonaws.com/certificates/6315569016.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=180905-493,1817.1,545.1
1135669,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/182311-1522.jpg,https://diamanti.s3.amazonaws.com/certificates/6312739955.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=182311-1522,1897.02,569.1
1127686,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180937-181.jpg,https://diamanti.s3.amazonaws.com/certificates/2314678735.jpg,,1867.05,560.1
1124540,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/180905-1804.jpg,https://diamanti.s3.amazonaws.com/certificates/6311649774.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=180905-1804,1880.01,56
1151553,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183343-1176.jpg,https://diamanti.s3.amazonaws.com/certificates/2314918827.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183343-1176,1944,583.
1150654,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183339-1656.jpg,https://diamanti.s3.amazonaws.com/certificates/6311904770.jpg,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183339-1656,1944,583.
1153004,ROUND,0.3,VVS2,E,EX,EX,EX,N,N,MUMBAI,https://diamanti.s3.amazonaws.com/images/diamond/183343-1219.jpg,,https://diamanti.s3.amazonaws.com/video/Vision360.html?d=183343-1219,1917,575.
1130219,ROUND,0.3,VVS2,E,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/7318522378.jpg,,1859.22,557.7
1131870,PEAR,0.3,VVS2,E,EX,EX,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6302779071.jpg,,1912.14,573.6
1139562,PEAR,0.3,VVS2,E,EX,VG,EX,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1305693257.jpg,,1674,502.
1153702,PEAR,0.3,VVS2,E,EX,EX,VG,N,NONE,MUMBAI,,,,1728,518.
1120805,ROUND,0.3,VVS2,E,EX,EX,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/1319221757.jpg,,1618.11,485.4
1120803,ROUND,0.3,VVS2,E,EX,EX,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/5313420794.jpg,,1618.11,485.4
1120807,OVAL,0.3,VVS2,E,EX,EX,VG,N,NONE,MUMBAI,,https://diamanti.s3.amazonaws.com/certificates/6305784202.jpg,,1628.1,488.43`

let json = utilsService.csvJSON(csv)


function onClickTitle(title) {
    json = json.sort((a, b) => (a[title] > b[title]) ? 1 : -1)
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function getFilterOptions(key) {
    const options = new Set()
    json.filter((item) => options.add(item[key]))
    return Array.from(options)
}

function getFilteredJson(filter) {
    let clonedJson = [...json]
    const { filterby, carat } = filter

    const values = Object.values(filterby)
    const keys = []
    values.map(value => {
        if (value) keys.push(getKeyByValue(filterby, value))
    })

    keys.map(key => {
        if (filterby[key] && key !== "Stock NO") clonedJson = clonedJson.filter(i => i[key] === filterby[key])
    })

    if (filterby["Stock NO"]) clonedJson = clonedJson.filter(i => +i["Stock NO"].includes(+filterby["Stock NO"]))

    if (carat.min) clonedJson = clonedJson.filter(i => +i["Carat"] >= +carat.min)
    if (carat.max) clonedJson = clonedJson.filter(i => +i["Carat"] <= +carat.max)

    return clonedJson
}
