var markers = [
	{
		coords: {lat:34.05363, lng:-118.25345},
		info_str: '<h1>T000433</h1> <p>333 Hope SI</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50433" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.050702, lng:-118.259462},
		info_str: '<h1>T000485</h1> <p>601FIG SP5</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50485" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19135, lng:-118.15899},
		info_str: '<h1>T000036</h1> <p>AltadenaLibraryBranch</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50036" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.18908, lng:-118.13694},
		info_str: '<h1>T000110</h1> <p>AltadenaLibraryMain</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50110" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.056143, lng:-118.257322},
		info_str: '<h1>T000997</h1> <p>LAUSD Testing</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50997" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.87944, lng:-118.05667},
		info_str: '<h1>T000242</h1> <p>BinTangHome</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50242" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.133805, lng:-118.018124},
		info_str: '<h1>T000812</h1> <p>Claude Felizardo</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50812" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1371181281, lng:-118.124410693},
		info_str: '<h1>T000951</h1> <p>Heaton RPi v3 PyCSN and GetEarlyWarning</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50951" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.160023, lng:-118.120587},
		info_str: '<h1>T000519</h1> <p>Heaton Home Orange Box</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50519" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.15262, lng:-118.804791},
		info_str: '<h1>T000998</h1> <p>Hilton Foundation</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50998" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:29.7604054, lng:-95.3640089},
		info_str: '<h1>T000904</h1> <p>SCF Waite</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50904" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20201, lng:-118.16761},
		info_str: '<h1>T000637</h1> <p>JPL 011-177</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50637" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20181, lng:-118.17053},
		info_str: '<h1>T000635</h1> <p>JPL 018-HAL</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50635" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.204019, lng:-118.175947},
		info_str: '<h1>T000900</h1> <p>JPL 035-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50900" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.2015810125, lng:-118.173389407},
		info_str: '<h1>T000634</h1> <p>JPL 067-117</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50634" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201902, lng:-118.171951},
		info_str: '<h1>T000501</h1> <p>JPL 079-BHR</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50501" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201324, lng:-118.171047},
		info_str: '<h1>T000757</h1> <p>JPL 082-110</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50757" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202666, lng:-118.169153},
		info_str: '<h1>T000753</h1> <p>JPL 089-106</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50753" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202471, lng:-118.168994},
		info_str: '<h1>T000745</h1> <p>JPL 098-106</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50745" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201543, lng:-118.167998},
		info_str: '<h1>T000517</h1> <p>JPL 103-106</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50517" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20284, lng:-118.16745},
		info_str: '<h1>T000616</h1> <p>JPL 107-105</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50616" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.2012, lng:-118.17321},
		info_str: '<h1>T000540</h1> <p>JPL 111-B11</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50540" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200801, lng:-118.172699},
		info_str: '<h1>T000746</h1> <p>JPL 114-13H</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50746" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202877, lng:-118.170671},
		info_str: '<h1>T000754</h1> <p>JPL 117-102</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50754" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20253, lng:-118.16719},
		info_str: '<h1>T000638</h1> <p>JPL 121-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50638" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200983, lng:-118.171033},
		info_str: '<h1>T000752</h1> <p>JPL 122-B02</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50752" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200827, lng:-118.171755},
		info_str: '<h1>T000492</h1> <p>JPL 125-B10</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50492" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201403, lng:-118.175141},
		info_str: '<h1>T000497</h1> <p>JPL 126-123</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50497" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200566, lng:-118.170528},
		info_str: '<h1>T000765</h1> <p>JPL 129-105</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50765" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201848, lng:-118.172732},
		info_str: '<h1>T000734</h1> <p>JPL 138-108</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50734" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20219, lng:-118.17414},
		info_str: '<h1>T000613</h1> <p>JPL 144-B02</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50613" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202816, lng:-118.172024},
		info_str: '<h1>T000781</h1> <p>JPL 148-106</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50781" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.2026, lng:-118.17387},
		info_str: '<h1>T000567</h1> <p>JPL 150-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50567" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200739, lng:-118.17318},
		info_str: '<h1>T000936</h1> <p>JPL 156-MEC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50936" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.199723, lng:-118.172018},
		info_str: '<h1>T000926</h1> <p>JPL 157-107</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50926" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19939, lng:-118.17194},
		info_str: '<h1>T000563</h1> <p>JPL 158-114</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50563" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200432, lng:-118.172544},
		info_str: '<h1>T000882</h1> <p>JPL 161-127</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50882" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200098, lng:-118.17406},
		info_str: '<h1>T000764</h1> <p>JPL 167-154</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50764" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19904, lng:-118.17441},
		info_str: '<h1>T000555</h1> <p>JPL 168-MEC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50555" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19872, lng:-118.174431},
		info_str: '<h1>T000710</h1> <p>JPL 169-MEC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50710" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.199, lng:-118.1722},
		info_str: '<h1>T000919</h1> <p>JPL 170-TEL</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50919" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19797, lng:-118.17204},
		info_str: '<h1>T000642</h1> <p>JPL 171-B24</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50642" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200295, lng:-118.171192},
		info_str: '<h1>T000733</h1> <p>JPL 1720-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50733" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201502, lng:-118.169128},
		info_str: '<h1>T000747</h1> <p>JPL 1721-102</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50747" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201488, lng:-118.169821},
		info_str: '<h1>T000759</h1> <p>JPL 177-103</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50759" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1989166212, lng:-118.172941779},
		info_str: '<h1>T000848</h1> <p>JPL 179-183</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50848" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1990940955, lng:-118.17339239},
		info_str: '<h1>T000562</h1> <p>JPL 179-148</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50562" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20042, lng:-118.17438},
		info_str: '<h1>T000510</h1> <p>JPL 180-B09</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50510" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20043, lng:-118.17464},
		info_str: '<h1>T000491</h1> <p>JPL 180-B05</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50491" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19933, lng:-118.17371},
		info_str: '<h1>T000669</h1> <p>JPL 183-104</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50669" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19932, lng:-118.17404},
		info_str: '<h1>T000654</h1> <p>JPL 183-824</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50654" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.2005637587, lng:-118.173547746},
		info_str: '<h1>T000854</h1> <p>JPL 185-105</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50854" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19894, lng:-118.175},
		info_str: '<h1>T000531</h1> <p>JPL 186-150</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50531" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200597, lng:-118.171779},
		info_str: '<h1>T000884</h1> <p>JPL 189-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50884" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1976, lng:-118.1732},
		info_str: '<h1>T000545</h1> <p>JPL 190-115</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50545" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202913, lng:-118.169878},
		info_str: '<h1>T000742</h1> <p>JPL 197-HLL</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50742" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20011, lng:-118.17256},
		info_str: '<h1>T000536</h1> <p>JPL 198-B09</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50536" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200422, lng:-118.171663},
		info_str: '<h1>T000731</h1> <p>JPL 199-103</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50731" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1974, lng:-118.17255},
		info_str: '<h1>T000645</h1> <p>JPL 200-106</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50645" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19729, lng:-118.173287},
		info_str: '<h1>T000946</h1> <p>JPL 201-104</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50946" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19806, lng:-118.172731},
		info_str: '<h1>T000774</h1> <p>JPL 202-108</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50774" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.2051, lng:-118.1711},
		info_str: '<h1>T000543</h1> <p>JPL 212-104</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50543" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200581, lng:-118.171505},
		info_str: '<h1>T000879</h1> <p>JPL 229-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50879" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20088, lng:-118.17416},
		info_str: '<h1>T000552</h1> <p>JPL 230-B28</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50552" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1971, lng:-118.172817},
		info_str: '<h1>T000490</h1> <p>JPL 231-B06</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50490" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1987, lng:-118.174},
		info_str: '<h1>T000535</h1> <p>JPL 233-109</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50535" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20165, lng:-118.17417},
		info_str: '<h1>T000614</h1> <p>JPL 238-ELE</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50614" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20282, lng:-118.16879},
		info_str: '<h1>T000873</h1> <p>JPL 239-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50873" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.198034, lng:-118.172438},
		info_str: '<h1>T000751</h1> <p>JPL 241-111</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50751" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.205581, lng:-118.17393},
		info_str: '<h1>T000755</h1> <p>JPL 243-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50755" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20202, lng:-118.17561},
		info_str: '<h1>T000537</h1> <p>JPL 245-107</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50537" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20269, lng:-118.1732},
		info_str: '<h1>T000566</h1> <p>JPL 248-104</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50566" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19958, lng:-118.17509},
		info_str: '<h1>T000539</h1> <p>JPL 249-116</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50539" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20285, lng:-118.17782},
		info_str: '<h1>T000544</h1> <p>JPL 251-103</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50544" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.2027, lng:-118.1772},
		info_str: '<h1>T000707</h1> <p>JPL 253-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50707" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.204642, lng:-118.175007},
		info_str: '<h1>T000736</h1> <p>JPL 260-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50736" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19998, lng:-118.17359},
		info_str: '<h1>T000648</h1> <p>JPL 264-116</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50648" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.203842, lng:-118.174203},
		info_str: '<h1>T000779</h1> <p>JPL 268-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50779" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201771, lng:-118.168796},
		info_str: '<h1>T000640</h1> <p>JPL 277-B08</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50640" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202219, lng:-118.170634},
		info_str: '<h1>T000748</h1> <p>JPL 280-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50748" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201492, lng:-118.170242},
		info_str: '<h1>T000750</h1> <p>JPL 284-102</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50750" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201295, lng:-118.172099},
		info_str: '<h1>T000756</h1> <p>JPL 296-ELE</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50756" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20279, lng:-118.1772},
		info_str: '<h1>T000903</h1> <p>JPL 298-120</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50903" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202775, lng:-118.171381},
		info_str: '<h1>T000503</h1> <p>JPL 299-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50503" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200444, lng:-118.169687},
		info_str: '<h1>T000500</h1> <p>JPL 300-113</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50500" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19948, lng:-118.17294},
		info_str: '<h1>T000837</h1> <p>JPL 301-122W</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50837" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.200842, lng:-118.168956},
		info_str: '<h1>T000498</h1> <p>JPL 302-111</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50498" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20095, lng:-118.170082},
		info_str: '<h1>T000516</h1> <p>JPL 303-MEC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50516" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202166, lng:-118.169178},
		info_str: '<h1>T000783</h1> <p>JPL 305-107</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50783" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1988, lng:-118.1713},
		info_str: '<h1>T000538</h1> <p>JPL 306-106</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50538" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20023, lng:-118.17046},
		info_str: '<h1>T000693</h1> <p>JPL 309-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50693" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201627, lng:-118.172004},
		info_str: '<h1>T000487</h1> <p>JPL 310-115</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50487" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19802, lng:-118.17144},
		info_str: '<h1>T000615</h1> <p>JPL 315-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50615" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202521, lng:-118.168029},
		info_str: '<h1>T000758</h1> <p>JPL 316-121</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50758" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.201143, lng:-118.169463},
		info_str: '<h1>T000775</h1> <p>JPL 317-105</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50775" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.198603, lng:-118.172165},
		info_str: '<h1>T000776</h1> <p>JPL 318-112</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50776" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19952, lng:-118.17118},
		info_str: '<h1>T000564</h1> <p>JPL 321-B10</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50564" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20315, lng:-118.17191},
		info_str: '<h1>T000661</h1> <p>JPL 323-208</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50661" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.199297, lng:-118.170781},
		info_str: '<h1>T000782</h1> <p>JPL 324-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50782" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202722, lng:-118.172612},
		info_str: '<h1>T000714</h1> <p>JPL 325-101</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50714" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.202351, lng:-118.169784},
		info_str: '<h1>T000835</h1> <p>JPL 336-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50835" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.205238, lng:-118.173632},
		info_str: '<h1>T000732</h1> <p>JPL 347-100</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50732" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20018, lng:-118.16894},
		info_str: '<h1>T000701</h1> <p>JPL 349-110</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50701" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19896, lng:-118.17038},
		info_str: '<h1>T000647</h1> <p>JPL 349-180</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50647" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19952, lng:-118.16995},
		info_str: '<h1>T000644</h1> <p>JPL 349-160</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50644" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.13818, lng:-118.11401},
		info_str: '<h1>T000268</h1> <p>Kohler</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50268" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.09175, lng:-118.2024},
		info_str: '<h1>T000624</h1> <p>LAUSD Latona</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50624" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.08901, lng:-118.27559},
		info_str: '<h1>T000576</h1> <p>LAUSD Micheltorena</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50576" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9288029, lng:-118.2619356},
		info_str: '<h1>T001250</h1> <p>LAUSD 116th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51250" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9339835, lng:-118.227579},
		info_str: '<h1>T001248</h1> <p>LAUSD Ritter</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51248" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9340901, lng:-118.2379518},
		info_str: '<h1>T001247</h1> <p>LAUSD Grape</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51247" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9342321, lng:-118.245297},
		info_str: '<h1>T001246</h1> <p>LAUSD Flournoy</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51246" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9337748, lng:-118.2529361},
		info_str: '<h1>T001245</h1> <p>LAUSD 112th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51245" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9370458, lng:-118.2616616},
		info_str: '<h1>T001244</h1> <p>LAUSD 109th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51244" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9411254, lng:-118.2457379},
		info_str: '<h1>T001243</h1> <p>LAUSD Markham Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51243" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9426112, lng:-118.2471118},
		info_str: '<h1>T001242</h1> <p>LAUSD Compton</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51242" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.946302, lng:-118.2582812},
		info_str: '<h1>T001241</h1> <p>LAUSD 99th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51241" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0417463, lng:-118.3268349},
		info_str: '<h1>T001233</h1> <p>LAUSD Cochran Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51233" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0520009, lng:-118.3309445},
		info_str: '<h1>T001232</h1> <p>LAUSD Queen Anne Place</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51232" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.055405, lng:-118.3329852},
		info_str: '<h1>T001231</h1> <p>LAUSD Los Angeles HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51231" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9857852, lng:-118.2883825},
		info_str: '<h1>T001229</h1> <p>LAUSD Hawkins SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51229" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.986184, lng:-118.293935},
		info_str: '<h1>T001228</h1> <p>LAUSD Budlong</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51228" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9772612, lng:-118.284343},
		info_str: '<h1>T001227</h1> <p>LAUSD Garcetti 68th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51227" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.960869, lng:-118.266234},
		info_str: '<h1>T001226</h1> <p>LAUSD South Park</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51226" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9560998, lng:-118.2466508},
		info_str: '<h1>T001225</h1> <p>LAUSD Baca Arts</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51225" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9491962, lng:-118.2483452},
		info_str: '<h1>T001224</h1> <p>LAUSD 96th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51224" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9527075, lng:-118.2366462},
		info_str: '<h1>T001223</h1> <p>LAUSD 92nd St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51223" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9410882, lng:-118.2299565},
		info_str: '<h1>T001222</h1> <p>LAUSD Weigand</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51222" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.943524, lng:-118.2374036},
		info_str: '<h1>T001221</h1> <p>LAUSD Griffith Joyner</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51221" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9449522, lng:-118.229728},
		info_str: '<h1>T001220</h1> <p>LAUSD Jordan SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51220" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9412671, lng:-118.1789574},
		info_str: '<h1>T001219</h1> <p>LAUSD Legacy HS (#9)</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51219" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9607535, lng:-118.2480944},
		info_str: '<h1>T001218</h1> <p>LAUSD Drew Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51218" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9615506, lng:-118.2379061},
		info_str: '<h1>T001217</h1> <p>LAUSD Graham</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51217" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9679734, lng:-118.2603825},
		info_str: '<h1>T001215</h1> <p>LAUSD McKinley</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51215" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.971297, lng:-118.276092},
		info_str: '<h1>T001213</h1> <p>LAUSD 75th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51213" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.979573, lng:-118.267965},
		info_str: '<h1>T001212</h1> <p>LAUSD 66th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51212" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9843579, lng:-118.2823116},
		info_str: '<h1>T001210</h1> <p>LAUSD 61st St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51210" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0394287, lng:-118.3193004},
		info_str: '<h1>T001208</h1> <p>LAUSD Carson-Gore</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51208" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0326395, lng:-118.3183123},
		info_str: '<h1>T001207</h1> <p>LAUSD Midcity Prescott</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51207" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0358401, lng:-118.3129751},
		info_str: '<h1>T001206</h1> <p>LAUSD Widney HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51206" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.016621, lng:-118.2833054},
		info_str: '<h1>T001202</h1> <p>LAUSD Alexander Sci Ctr</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51202" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9781209, lng:-118.2498756},
		info_str: '<h1>T001200</h1> <p>LAUSD Miramonte</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51200" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9734492, lng:-118.2560885},
		info_str: '<h1>T001199</h1> <p>LAUSD Wisdom</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51199" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9700878, lng:-118.2508983},
		info_str: '<h1>T001198</h1> <p>LAUSD Parmalee</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51198" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9832503, lng:-118.2554946},
		info_str: '<h1>T001196</h1> <p>LAUSD Diego Rivera HS (#2)</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51196" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9845948, lng:-118.2517555},
		info_str: '<h1>T001195</h1> <p>LAUSD Moore STEM Acad</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51195" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0575426, lng:-118.2795295},
		info_str: '<h1>T001193</h1> <p>LAUSD MacArthur Park VPA</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51193" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0664029, lng:-118.280595},
		info_str: '<h1>T001192</h1> <p>LAUSD Lafayette Park PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51192" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0603794, lng:-118.2797525},
		info_str: '<h1>T001191</h1> <p>LAUSD White</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51191" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0546725, lng:-118.2722819},
		info_str: '<h1>T001190</h1> <p>LAUSD Esperanza</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51190" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.062472, lng:-118.26729},
		info_str: '<h1>T001189</h1> <p>LAUSD Union</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51189" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1162108, lng:-118.2012314},
		info_str: '<h1>T001188</h1> <p>LAUSD Highland Park Cont</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51188" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9552835, lng:-118.2112231},
		info_str: '<h1>T001187</h1> <p>LAUSD Odyssey HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51187" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9454059, lng:-118.2219414},
		info_str: '<h1>T001186</h1> <p>LAUSD Southeast SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51186" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9458132, lng:-118.2249763},
		info_str: '<h1>T001185</h1> <p>LAUSD Southeast Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51185" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9448238, lng:-118.1926976},
		info_str: '<h1>T001183</h1> <p>LAUSD Bryson</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51183" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9431147, lng:-118.1824336},
		info_str: '<h1>T001182</h1> <p>LAUSD Tweedy</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51182" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9453079, lng:-118.2009645},
		info_str: '<h1>T001181</h1> <p>LAUSD San Miguel</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51181" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9464259, lng:-118.2109032},
		info_str: '<h1>T001180</h1> <p>LAUSD Victoria</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51180" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9456327, lng:-118.2141253},
		info_str: '<h1>T001179</h1> <p>LAUSD Madison</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51179" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9484035, lng:-118.2176201},
		info_str: '<h1>T001178</h1> <p>LAUSD Stanford PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51178" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9510783, lng:-118.2217736},
		info_str: '<h1>T001177</h1> <p>LAUSD Stanford</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51177" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9552914, lng:-118.2220261},
		info_str: '<h1>T001176</h1> <p>LAUSD Willow (#9)</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51176" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9613159, lng:-118.2220978},
		info_str: '<h1>T001175</h1> <p>LAUSD Liberty</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51175" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9531625, lng:-118.1981384},
		info_str: '<h1>T001174</h1> <p>LAUSD South Gate Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51174" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9560708, lng:-118.2093189},
		info_str: '<h1>T001173</h1> <p>LAUSD South Gate HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51173" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.959584, lng:-118.210748},
		info_str: '<h1>T001172</h1> <p>LAUSD Independence</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51172" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.963896, lng:-118.212062},
		info_str: '<h1>T001171</h1> <p>LAUSD State</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51171" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9691601, lng:-118.2093947},
		info_str: '<h1>T001170</h1> <p>LAUSD Hope</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51170" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9759187, lng:-118.2092257},
		info_str: '<h1>T001169</h1> <p>LAUSD Roybal-Allard</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51169" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9715605, lng:-118.2310073},
		info_str: '<h1>T001168</h1> <p>LAUSD Walnut Park MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51168" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9809755, lng:-118.2175706},
		info_str: '<h1>T001167</h1> <p>LAUSD Gage MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51167" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9823798, lng:-118.2339073},
		info_str: '<h1>T001166</h1> <p>LAUSD Marquez SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51166" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9789059, lng:-118.2291798},
		info_str: '<h1>T001165</h1> <p>LAUSD Middleton PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51165" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.979956, lng:-118.2278997},
		info_str: '<h1>T001164</h1> <p>LAUSD Middleton</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51164" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9676156, lng:-118.2238341},
		info_str: '<h1>T001163</h1> <p>LAUSD Walnut Park</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51163" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.978041, lng:-118.216816},
		info_str: '<h1>T001162</h1> <p>LAUSD Miles</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51162" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9866312, lng:-118.2188995},
		info_str: '<h1>T001161</h1> <p>LAUSD Huntington Park HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51161" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9908456, lng:-118.223697},
		info_str: '<h1>T001160</h1> <p>LAUSD Pacific Blvd</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51160" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9601813, lng:-118.1737501},
		info_str: '<h1>T001158</h1> <p>LAUSD Park Ave</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51158" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9630704, lng:-118.1832921},
		info_str: '<h1>T001157</h1> <p>LAUSD Elizabeth LC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51157" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9658136, lng:-118.193036},
		info_str: '<h1>T001156</h1> <p>LAUSD Hughes</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51156" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.968362, lng:-118.188535},
		info_str: '<h1>T001155</h1> <p>LAUSD Escalante</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51155" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9678828, lng:-118.1767795},
		info_str: '<h1>T001154</h1> <p>LAUSD Ochoa LC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51154" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9791247, lng:-118.2000542},
		info_str: '<h1>T001153</h1> <p>LAUSD Orchard Acad</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51153" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9724171, lng:-118.1901373},
		info_str: '<h1>T001152</h1> <p>LAUSD Bell HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51152" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9757126, lng:-118.1976287},
		info_str: '<h1>T001151</h1> <p>LAUSD Corona</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51151" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9791701, lng:-118.1977607},
		info_str: '<h1>T001150</h1> <p>LAUSD Escutia</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51150" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9779925, lng:-118.1776226},
		info_str: '<h1>T001149</h1> <p>LAUSD Woodlawn</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51149" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9846977, lng:-118.1954123},
		info_str: '<h1>T001148</h1> <p>LAUSD Huntington Park</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51148" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9861381, lng:-118.1981023},
		info_str: '<h1>T001147</h1> <p>LAUSD Nimitz Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51147" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.989823, lng:-118.1996165},
		info_str: '<h1>T001146</h1> <p>LAUSD Loma Vista</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51146" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9809106, lng:-118.1882376},
		info_str: '<h1>T001145</h1> <p>LAUSD Nueva Vista</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51145" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9829878, lng:-118.1888728},
		info_str: '<h1>T001144</h1> <p>LAUSD Maywood Acad</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51144" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9894279, lng:-118.191357},
		info_str: '<h1>T001143</h1> <p>LAUSD Fishburn</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51143" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9873205, lng:-118.1830899},
		info_str: '<h1>T001142</h1> <p>LAUSD Maywood CES</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51142" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9858089, lng:-118.1769037},
		info_str: '<h1>T001141</h1> <p>LAUSD Heliotrope</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51141" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9933056, lng:-118.1839875},
		info_str: '<h1>T001140</h1> <p>LAUSD Maywood</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51140" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0035091, lng:-118.2312358},
		info_str: '<h1>T001139</h1> <p>LAUSD Vernon City</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51139" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9957911, lng:-118.2404031},
		info_str: '<h1>T001138</h1> <p>LAUSD Holmes</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51138" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0245568, lng:-118.2825494},
		info_str: '<h1>T001137</h1> <p>LAUSD 32nd St Magnet</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51137" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03976, lng:-118.2895417},
		info_str: '<h1>T001136</h1> <p>LAUSD West Adams Prep</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51136" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0349098, lng:-118.2787451},
		info_str: '<h1>T001135</h1> <p>LAUSD Norwood</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51135" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0379421, lng:-118.2967404},
		info_str: '<h1>T001134</h1> <p>LAUSD Salvin Spec Ed</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51134" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0308384, lng:-118.2928127},
		info_str: '<h1>T001133</h1> <p>LAUSD Vermont</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51133" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0264362, lng:-118.2934521},
		info_str: '<h1>T001132</h1> <p>LAUSD Mack</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51132" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.02177, lng:-118.2964787},
		info_str: '<h1>T001131</h1> <p>LAUSD Weemes</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51131" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0226018, lng:-118.2704776},
		info_str: '<h1>T001130</h1> <p>LAUSD Adams MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51130" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0609789, lng:-118.3165408},
		info_str: '<h1>T001129</h1> <p>LAUSD Wilshire Park</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51129" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0493379, lng:-118.2940013},
		info_str: '<h1>T001124</h1> <p>LAUSD Berendo MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51124" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.050999, lng:-118.286892},
		info_str: '<h1>T001123</h1> <p>LAUSD Politi</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51123" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0565545, lng:-118.2858247},
		info_str: '<h1>T001121</h1> <p>LAUSD Hoover</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51121" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0630057, lng:-118.2900953},
		info_str: '<h1>T001119</h1> <p>LAUSD Kim Academy</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51119" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0582858, lng:-118.2974124},
		info_str: '<h1>T001114</h1> <p>LAUSD RFK HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51114" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0584479, lng:-118.3146043},
		info_str: '<h1>T001113</h1> <p>LAUSD Wilton</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51113" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0530925, lng:-118.2992066},
		info_str: '<h1>T001036</h1> <p>LAUSD Mariposa-Nabi</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51036" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.053174, lng:-118.305998},
		info_str: '<h1>T001031</h1> <p>LAUSD Hobart Blvd</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51031" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0476826, lng:-118.305646},
		info_str: '<h1>T001028</h1> <p>LAUSD Los Angeles</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51028" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0450973, lng:-118.3172},
		info_str: '<h1>T001013</h1> <p>LAUSD Pio Pico</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51013" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0319934, lng:-118.2784548},
		info_str: '<h1>T001010</h1> <p>LAUSD Lanterman HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51010" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0288436, lng:-118.2712109},
		info_str: '<h1>T001009</h1> <p>LAUSD Ortho Hosp Magnet</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51009" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0172594, lng:-118.2753651},
		info_str: '<h1>T001008</h1> <p>LAUSD Clinton MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51008" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.040313, lng:-118.3254361},
		info_str: '<h1>T001007</h1> <p>LAUSD Arlington Heights</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51007" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0808105, lng:-118.3160769},
		info_str: '<h1>T001006</h1> <p>LAUSD Van Ness</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51006" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0705447, lng:-118.3350083},
		info_str: '<h1>T001005</h1> <p>LAUSD 3rd St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51005" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.070277, lng:-118.3082491},
		info_str: '<h1>T001004</h1> <p>LAUSD Kim</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51004" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0772018, lng:-118.3042303},
		info_str: '<h1>T001002</h1> <p>LAUSD Harvard</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51002" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0777955, lng:-118.2989582},
		info_str: '<h1>T001001</h1> <p>LAUSD Alexendria</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51001" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.072925, lng:-118.292591},
		info_str: '<h1>T001000</h1> <p>LAUSD Del Olmo</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51000" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.08857, lng:-118.16829},
		info_str: '<h1>T000949</h1> <p>LAUSD Cesar Chavez</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50949" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0887282476, lng:-118.249199864},
		info_str: '<h1>T000939</h1> <p>LAUSD Elysian Heights</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50939" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0781210034, lng:-118.179742594},
		info_str: '<h1>T000937</h1> <p>LAUSD Farmdale</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50937" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1140057654, lng:-118.379691742},
		info_str: '<h1>T000890</h1> <p>LAUSD Wonderland</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50890" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.01722, lng:-118.18465},
		info_str: '<h1>T000797</h1> <p>LAUSD Eastman</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50797" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.02673, lng:-118.15813},
		info_str: '<h1>T000772</h1> <p>LAUSD Garfield SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50772" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1276, lng:-118.22711},
		info_str: '<h1>T000766</h1> <p>LAUSD Delevan</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50766" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.13167, lng:-118.20531},
		info_str: '<h1>T000704</h1> <p>LAUSD Eagle Rock SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50704" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.07877, lng:-118.25801},
		info_str: '<h1>T000685</h1> <p>LAUSD Logan Street</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50685" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.05908, lng:-118.24336},
		info_str: '<h1>T000683</h1> <p>LAUSD Cortines VPA</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50683" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03573, lng:-118.2476},
		info_str: '<h1>T000682</h1> <p>LAUSD 9th Street</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50682" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.06202, lng:-118.25415},
		info_str: '<h1>T000680</h1> <p>LAUSD Roybal</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50680" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.07954, lng:-118.17942},
		info_str: '<h1>T000633</h1> <p>LAUSD El Sereno Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50633" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.09575, lng:-118.15879},
		info_str: '<h1>T000632</h1> <p>LAUSD Sierra Vista</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50632" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.06901, lng:-118.18629},
		info_str: '<h1>T000631</h1> <p>LAUSD Wilson SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50631" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.08253, lng:-118.19184},
		info_str: '<h1>T000628</h1> <p>LAUSD Huntington</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50628" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04863, lng:-118.22685},
		info_str: '<h1>T000626</h1> <p>LAUSD Mendez SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50626" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04913, lng:-118.22454},
		info_str: '<h1>T000625</h1> <p>LAUSD Utah</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50625" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.075143, lng:-118.203802},
		info_str: '<h1>T000623</h1> <p>LAUSD Lincoln SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50623" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.05601, lng:-118.20603},
		info_str: '<h1>T000622</h1> <p>LAUSD East LA Occupational</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50622" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04934, lng:-118.20801},
		info_str: '<h1>T000621</h1> <p>LAUSD Sheridan</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50621" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0602, lng:-118.19602},
		info_str: '<h1>T000619</h1> <p>LAUSD Murchison</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50619" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.07289, lng:-118.20583},
		info_str: '<h1>T000618</h1> <p>LAUSD Gates</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50618" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0683, lng:-118.21228},
		info_str: '<h1>T000617</h1> <p>LAUSD Griffin</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50617" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03237, lng:-118.16118},
		info_str: '<h1>T000607</h1> <p>LAUSD Griffith Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50607" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.02517, lng:-118.20293},
		info_str: '<h1>T000605</h1> <p>LAUSD Lorena</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50605" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0853, lng:-118.1993},
		info_str: '<h1>T000600</h1> <p>LAUSD Glen Alta</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50600" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04223, lng:-118.21313},
		info_str: '<h1>T000599</h1> <p>LAUSD Breed</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50599" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04027, lng:-118.20451},
		info_str: '<h1>T000597</h1> <p>LAUSD 1st Street</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50597" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04036, lng:-118.16662},
		info_str: '<h1>T000596</h1> <p>LAUSD Brooklyn</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50596" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03631, lng:-118.21217},
		info_str: '<h1>T000595</h1> <p>LAUSD Hollenbeck Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50595" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04436, lng:-118.19456},
		info_str: '<h1>T000594</h1> <p>LAUSD Malabar</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50594" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.05197, lng:-118.19736},
		info_str: '<h1>T000593</h1> <p>LAUSD Evergreen</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50593" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.02862, lng:-118.18674},
		info_str: '<h1>T000592</h1> <p>LAUSD Rowan</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50592" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03772, lng:-118.15988},
		info_str: '<h1>T000591</h1> <p>LAUSD Hamasaki</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50591" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04179, lng:-118.17552},
		info_str: '<h1>T000590</h1> <p>LAUSD Esteban Torres SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50590" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.02729, lng:-118.19345},
		info_str: '<h1>T000589</h1> <p>LAUSD Stevenson Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50589" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03585, lng:-118.17537},
		info_str: '<h1>T000588</h1> <p>LAUSD Marianna</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50588" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1086, lng:-118.26688},
		info_str: '<h1>T000580</h1> <p>LAUSD Ivanhoe</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50580" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.06895, lng:-118.22064},
		info_str: '<h1>T000578</h1> <p>LAUSD Albion</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50578" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0221, lng:-118.21093},
		info_str: '<h1>T000571</h1> <p>LAUSD Dena</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50571" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03972, lng:-118.15213},
		info_str: '<h1>T000570</h1> <p>LAUSD Lane Elem</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50570" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.08412, lng:-118.26534},
		info_str: '<h1>T000568</h1> <p>LAUSD Mayberry</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50568" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.08199, lng:-118.288},
		info_str: '<h1>T000559</h1> <p>LAUSD Dayton Heights</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50559" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.09699, lng:-118.28086},
		info_str: '<h1>T000557</h1> <p>LAUSD King Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50557" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.084919, lng:-118.212378},
		info_str: '<h1>T000549</h1> <p>LAUSD Hillside</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50549" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.09008, lng:-118.17702},
		info_str: '<h1>T000548</h1> <p>LAUSD El Sereno</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50548" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.10594, lng:-118.28487},
		info_str: '<h1>T000546</h1> <p>LAUSD Franklin</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50546" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.069548, lng:-118.196597},
		info_str: '<h1>T000420</h1> <p>LAUSD East LA Skills</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50420" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1019, lng:-118.25193},
		info_str: '<h1>T000389</h1> <p>LAUSD Allesandro</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50389" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.10974, lng:-118.20602},
		info_str: '<h1>T000388</h1> <p>LAUSD Aldama</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50388" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.12861, lng:-118.18667},
		info_str: '<h1>T000387</h1> <p>LAUSD Annandale</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50387" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.09486, lng:-118.22553},
		info_str: '<h1>T000386</h1> <p>LAUSD Aragon</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50386" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.10189, lng:-118.2032},
		info_str: '<h1>T000385</h1> <p>LAUSD Arroyo Seco</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50385" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1157, lng:-118.25494},
		info_str: '<h1>T000384</h1> <p>LAUSD Atwater</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50384" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.11909, lng:-118.20645},
		info_str: '<h1>T000383</h1> <p>LAUSD Buchanan</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50383" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.11985, lng:-118.18333},
		info_str: '<h1>T000382</h1> <p>LAUSD Burbank</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50382" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.13885, lng:-118.19933},
		info_str: '<h1>T000381</h1> <p>LAUSD Dahlia Heights</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50381" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.09127, lng:-118.23864},
		info_str: '<h1>T000379</h1> <p>LAUSD Dorris Place</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50379" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.13613, lng:-118.21318},
		info_str: '<h1>T000378</h1> <p>LAUSD Eagle Rock EL</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50378" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1212, lng:-118.19409},
		info_str: '<h1>T000376</h1> <p>LAUSD Yorkdale</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50376" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.13325, lng:-118.19446},
		info_str: '<h1>T000374</h1> <p>LAUSD Rockdale</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50374" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.12138, lng:-118.21765},
		info_str: '<h1>T000335</h1> <p>LAUSD Toland</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50335" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.11123, lng:-118.19686},
		info_str: '<h1>T000330</h1> <p>LAUSD Richard Riordan</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50330" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.10226, lng:-118.2374},
		info_str: '<h1>T000327</h1> <p>LAUSD Sandra Sotomayor</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50327" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.11767, lng:-118.24014},
		info_str: '<h1>T000326</h1> <p>LAUSD Fletcher Drive</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50326" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.102552, lng:-118.189255},
		info_str: '<h1>T000325</h1> <p>LAUSD Bushnell</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50325" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.11872, lng:-118.18236},
		info_str: '<h1>T000324</h1> <p>LAUSD Garvanza</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50324" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.11075, lng:-118.19753},
		info_str: '<h1>T000323</h1> <p>LAUSD Monte Vista</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50323" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.08673, lng:-118.2164},
		info_str: '<h1>T000322</h1> <p>LAUSD Loreto</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50322" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.12109, lng:-118.18488},
		info_str: '<h1>T000321</h1> <p>LAUSD Meridian EEC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50321" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.11576, lng:-118.2411},
		info_str: '<h1>T000318</h1> <p>LAUSD Irving</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50318" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.10481, lng:-118.21599},
		info_str: '<h1>T000317</h1> <p>LAUSD Mount Washington</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50317" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.12256, lng:-118.26788},
		info_str: '<h1>T000316</h1> <p>LAUSD Glenfeliz</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50316" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.10447, lng:-118.23656},
		info_str: '<h1>T000315</h1> <p>LAUSD Glassell</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50315" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0572726904, lng:-118.171330487},
		info_str: '<h1>T000293</h1> <p>LAUSD City Terrace</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50293" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.046563, lng:-118.18181},
		info_str: '<h1>T000284</h1> <p>LAUSD Anton</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50284" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.11921, lng:-118.17244},
		info_str: '<h1>T000282</h1> <p>LAUSD San Pascual</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50282" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.068192, lng:-118.193459},
		info_str: '<h1>T000281</h1> <p>LAUSD Multnomah</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50281" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.053693, lng:-118.188946},
		info_str: '<h1>T000280</h1> <p>LAUSD Harrison</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50280" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0736941, lng:-118.2916438},
		info_str: '<h1>T000112</h1> <p>LAUSD Virgil MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50112" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.070664, lng:-118.285935},
		info_str: '<h1>T000111</h1> <p>LAUSD Commonwealth</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50111" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0927845, lng:-118.2879714},
		info_str: '<h1>T000107</h1> <p>LAUSD Lexington PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50107" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.091666, lng:-118.3028793},
		info_str: '<h1>T000105</h1> <p>LAUSD Kingsley</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50105" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0918115, lng:-118.299709},
		info_str: '<h1>T000102</h1> <p>LAUSD Ramona</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50102" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0887898, lng:-118.3374512},
		info_str: '<h1>T000099</h1> <p>LAUSD Bancroft MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50099" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0882332, lng:-118.3269719},
		info_str: '<h1>T000097</h1> <p>LAUSD Vine</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50097" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0912722, lng:-118.3193004},
		info_str: '<h1>T000095</h1> <p>LAUSD Hollywood PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50095" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.094804, lng:-118.316847},
		info_str: '<h1>T000094</h1> <p>LAUSD Le Conte MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50094" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0991651, lng:-118.3400534},
		info_str: '<h1>T000091</h1> <p>LAUSD Hollywood HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50091" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1004576, lng:-118.3343691},
		info_str: '<h1>T000090</h1> <p>LAUSD Selma</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50090" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1058128, lng:-118.3206796},
		info_str: '<h1>T000089</h1> <p>LAUSD Cheremoya</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50089" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0962709, lng:-118.314839},
		info_str: '<h1>T000086</h1> <p>LAUSD Bernstein HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50086" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0998183, lng:-118.3132725},
		info_str: '<h1>T000085</h1> <p>LAUSD Grant</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50085" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0244623, lng:-118.2181684},
		info_str: '<h1>T000084</h1> <p>LAUSD Garza PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50084" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0244468, lng:-118.1858612},
		info_str: '<h1>T000081</h1> <p>LAUSD Amanacer PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50081" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0336955, lng:-118.2347994},
		info_str: '<h1>T000080</h1> <p>LAUSD Metropolitan HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50080" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0617425, lng:-118.2644804},
		info_str: '<h1>T000077</h1> <p>LAUSD Belmont HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50077" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0681055, lng:-118.2710486},
		info_str: '<h1>T000076</h1> <p>LAUSD Lake St PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50076" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0723117, lng:-118.2699067},
		info_str: '<h1>T000075</h1> <p>LAUSD Rosemont</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50075" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.066333, lng:-118.2559734},
		info_str: '<h1>T000074</h1> <p>LAUSD Plasencia</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50074" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9962357, lng:-118.2880627},
		info_str: '<h1>T000073</h1> <p>LAUSD 52nd St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50073" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.002929, lng:-118.299},
		info_str: '<h1>T000072</h1> <p>LAUSD Normandie</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50072" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0010041, lng:-118.292219},
		info_str: '<h1>T000066</h1> <p>LAUSD Jones PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50066" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0032485, lng:-118.2885195},
		info_str: '<h1>T000064</h1> <p>LAUSD LaMotte (#10)</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50064" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0088223, lng:-118.2921733},
		info_str: '<h1>T000061</h1> <p>LAUSD Manual Arts HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50061" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0077277, lng:-118.2896613},
		info_str: '<h1>T000058</h1> <p>LAUSD Menlo</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50058" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0047559, lng:-118.2800697},
		info_str: '<h1>T000056</h1> <p>LAUSD West Vernon</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50056" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0483172, lng:-118.2732352},
		info_str: '<h1>T000053</h1> <p>LAUSD 10th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50053" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0479849, lng:-118.2706147},
		info_str: '<h1>T000050</h1> <p>LAUSD Olympic PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50050" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.028208, lng:-118.2570572},
		info_str: '<h1>T000049</h1> <p>LAUSD San Pedro</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50049" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9907285, lng:-118.2642196},
		info_str: '<h1>T000048</h1> <p>LAUSD Los Angeles Academy MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50048" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9904823, lng:-118.273401},
		info_str: '<h1>T000046</h1> <p>LAUSD Estrella</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50046" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9940398, lng:-118.2679653},
		info_str: '<h1>T000044</h1> <p>LAUSD Angelou</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50044" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9946065, lng:-118.2730813},
		info_str: '<h1>T000043</h1> <p>LAUSD Main St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50043" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9956919, lng:-118.2536216},
		info_str: '<h1>T000042</h1> <p>LAUSD Hooper</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50042" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.994816, lng:-118.2574589},
		info_str: '<h1>T000041</h1> <p>LAUSD Aurora</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50041" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.998533, lng:-118.2617872},
		info_str: '<h1>T000040</h1> <p>LAUSD 49th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50040" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0023151, lng:-118.2567737},
		info_str: '<h1>T000039</h1> <p>LAUSD Ride (#21)</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50039" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0031683, lng:-118.2486879},
		info_str: '<h1>T000038</h1> <p>LAUSD Ascot</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50038" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.003133, lng:-118.2621},
		info_str: '<h1>T000037</h1> <p>LAUSD Carver MS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50037" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0067787, lng:-118.2600334},
		info_str: '<h1>T000035</h1> <p>LAUSD Harmony</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50035" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0094826, lng:-118.2508766},
		info_str: '<h1>T000034</h1> <p>LAUSD Jefferson HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50034" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0095555, lng:-118.2586289},
		info_str: '<h1>T000033</h1> <p>LAUSD Wadsworth</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50033" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0105253, lng:-118.2676913},
		info_str: '<h1>T000032</h1> <p>LAUSD Lizarraga</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50032" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.039683, lng:-118.181646},
		info_str: '<h1>T000031</h1> <p>LAUSD Belvedere Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50031" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0121171, lng:-118.2693357},
		info_str: '<h1>T000030</h1> <p>LAUSD Trinity</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50030" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.015479, lng:-118.27073},
		info_str: '<h1>T000029</h1> <p>LAUSD Maple PC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50029" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0141071, lng:-118.25986},
		info_str: '<h1>T000026</h1> <p>LAUSD Jones</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50026" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0191593, lng:-118.2684527},
		info_str: '<h1>T000025</h1> <p>LAUSD Huerta</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50025" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0193828, lng:-118.260748},
		info_str: '<h1>T000024</h1> <p>LAUSD 28th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50024" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0290276, lng:-118.2628492},
		info_str: '<h1>T000023</h1> <p>LAUSD Santee</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50023" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0152673, lng:-118.2488249},
		info_str: '<h1>T000022</h1> <p>LAUSD Nava LA</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50022" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0125015, lng:-118.2465864},
		info_str: '<h1>T000021</h1> <p>LAUSD Nevin</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50021" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.02324, lng:-118.25116},
		info_str: '<h1>T000020</h1> <p>LAUSD 20th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50020" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0545758, lng:-118.2693814},
		info_str: '<h1>T000019</h1> <p>LAUSD Liechty Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50019" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0579074, lng:-118.2616798},
		info_str: '<h1>T000018</h1> <p>LAUSD Contreras</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50018" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0630446, lng:-118.250412},
		info_str: '<h1>T000017</h1> <p>LAUSD Downtown Magnet</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50017" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0340353, lng:-118.1911302},
		info_str: '<h1>T000014</h1> <p>LAUSD Ramona HS</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50014" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.038931, lng:-118.1714766},
		info_str: '<h1>T000012</h1> <p>LAUSD Solis Learning Academy</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50012" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0387966, lng:-118.1680484},
		info_str: '<h1>T000011</h1> <p>LAUSD Perez Sp Ed Ctr</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50011" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.043014, lng:-118.339686},
		info_str: '<h1>T001240</h1> <p>LAUSD Alta Loma</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51240" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0636937, lng:-118.3363325},
		info_str: '<h1>T001230</h1> <p>LAUSD Burroughs Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51230" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9605112, lng:-118.251571},
		info_str: '<h1>T001216</h1> <p>LAUSD Russell</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51216" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0117397, lng:-118.3080664},
		info_str: '<h1>T001209</h1> <p>LAUSD King Jr</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51209" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0350117, lng:-118.3107152},
		info_str: '<h1>T001205</h1> <p>LAUSD 24th St</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51205" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0231437, lng:-118.3110952},
		info_str: '<h1>T001204</h1> <p>LAUSD Bright</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51204" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0192234, lng:-118.306525},
		info_str: '<h1>T001203</h1> <p>LAUSD Foshay LC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51203" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.973797, lng:-118.238801},
		info_str: '<h1>T001201</h1> <p>LAUSD Florence</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51201" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.978996, lng:-118.250856},
		info_str: '<h1>T001197</h1> <p>LAUSD Edison Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51197" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9863522, lng:-118.240671},
		info_str: '<h1>T001194</h1> <p>LAUSD Lillian</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51194" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9559022, lng:-118.2016199},
		info_str: '<h1>T001184</h1> <p>LAUSD San Gabriel</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51184" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0434932, lng:-118.2879714},
		info_str: '<h1>T001027</h1> <p>LAUSD Magnolia</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51027" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0707372, lng:-118.3051288},
		info_str: '<h1>T001003</h1> <p>LAUSD Cahuenga</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51003" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.087072477, lng:-118.219430407},
		info_str: '<h1>T000940</h1> <p>LAUSD Nightingale</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50940" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03121, lng:-118.20614},
		info_str: '<h1>T000681</h1> <p>LAUSD Euclid Street</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50681" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.10251, lng:-118.29267},
		info_str: '<h1>T000610</h1> <p>LAUSD Los Feliz</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50610" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03128, lng:-118.21621},
		info_str: '<h1>T000606</h1> <p>LAUSD Soto Street</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50606" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03883, lng:-118.20983},
		info_str: '<h1>T000598</h1> <p>LAUSD Roosevelt SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50598" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.05387, lng:-118.17787},
		info_str: '<h1>T000587</h1> <p>LAUSD Kennedy Elem</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50587" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.05263, lng:-118.21687},
		info_str: '<h1>T000579</h1> <p>LAUSD Bridge Street</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50579" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.06454, lng:-118.23058},
		info_str: '<h1>T000577</h1> <p>LAUSD Ann</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50577" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.04483, lng:-118.21709},
		info_str: '<h1>T000575</h1> <p>LAUSD 2nd Street</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50575" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.02041, lng:-118.1714},
		info_str: '<h1>T000574</h1> <p>LAUSD Ford Elem</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50574" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.02876, lng:-118.15325},
		info_str: '<h1>T000572</h1> <p>LAUSD 4th Street</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50572" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.089, lng:-118.25816},
		info_str: '<h1>T000569</h1> <p>LAUSD Clifford</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50569" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.08923, lng:-118.28792},
		info_str: '<h1>T000560</h1> <p>LAUSD Lockwood</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50560" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0289, lng:-118.17086},
		info_str: '<h1>T000558</h1> <p>LAUSD Humphreys</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50558" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0824, lng:-118.1691},
		info_str: '<h1>T000550</h1> <p>LAUSD Sierra Park</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50550" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.10796, lng:-118.27747},
		info_str: '<h1>T000547</h1> <p>LAUSD Marshall SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50547" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.03539, lng:-118.18633},
		info_str: '<h1>T000520</h1> <p>LAUSD Belvedere Elem</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50520" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.029597, lng:-118.210256},
		info_str: '<h1>T000290</h1> <p>LAUSD Sunrise</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50290" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.076154, lng:-118.232196},
		info_str: '<h1>T000015</h1> <p>LAUSD Solano</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50015" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9695845, lng:-118.266952},
		info_str: '<h1>T001214</h1> <p>LAUSD Fremont SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51214" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.9775842, lng:-118.2758219},
		info_str: '<h1>T001211</h1> <p>LAUSD Bethune Middle</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51211" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.064052, lng:-118.2397486},
		info_str: '<h1>T000016</h1> <p>LAUSD Castelar</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50016" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.05826, lng:-118.2035},
		info_str: '<h1>T000922</h1> <p>LAUSD Francisco Bravo SH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50922" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0343146, lng:-118.2654986},
		info_str: '<h1>T000055</h1> <p>LAUSD Central Adult AEWC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50055" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19306, lng:-118.17885},
		info_str: '<h1>T000266</h1> <p>LCHS 1MDF</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50266" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19313, lng:-118.17944},
		info_str: '<h1>T000243</h1> <p>LCHS IRC</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50243" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19305, lng:-118.17886},
		info_str: '<h1>T000265</h1> <p>LCHS 2AH</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50265" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20813, lng:-118.20579},
		info_str: '<h1>T000262</h1> <p>LCUSD LCE 710</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50262" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20885, lng:-118.20471},
		info_str: '<h1>T000260</h1> <p>LCUSD LCE RM18</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50260" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20864, lng:-118.18886},
		info_str: '<h1>T000226</h1> <p>LCUSD PDSE RM8</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50226" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.22241, lng:-118.21785},
		info_str: '<h1>T000189</h1> <p>LCUSD PALM RM19</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50189" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.2045, lng:-118.20217},
		info_str: '<h1>T000143</h1> <p>LCUSD HQSHOP</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50143" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.2054, lng:-118.20319},
		info_str: '<h1>T000142</h1> <p>LCUSD HQA110</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50142" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.22072, lng:-118.21754},
		info_str: '<h1>T000141</h1> <p>LCUSD PALM REST</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50141" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.22159, lng:-118.21842},
		info_str: '<h1>T000083</h1> <p>LCUSD PALM RM260</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50083" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.20504, lng:-118.20444},
		info_str: '<h1>T000062</h1> <p>LCUSD LANTERMAN</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50062" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:37.835823, lng:-122.214645},
		info_str: '<h1>T000171</h1> <p>Maffei</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50171" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.13681, lng:-118.12626},
		info_str: '<h1>T000283</h1> <p>Millikan Basement</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50283" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0335348, lng:-118.4511715},
		info_str: '<h1>T000947</h1> <p>Wildwood School</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50947" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.17153, lng:-118.18523},
		info_str: '<h1>T000337</h1> <p>PAS testvault</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50337" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1478, lng:-118.1445},
		info_str: '<h1>T000958</h1> <p>ODROID Test Client</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50958" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1380821058, lng:-118.12419889},
		info_str: '<h1>T000913</h1> <p>RPi v3 PyAmazonCSN and GetEarlyWarning</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50913" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1478, lng:-118.1445},
		info_str: '<h1>T000818</h1> <p>LIVA Test Client</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50818" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.082056, lng:-118.437709},
		info_str: '<h1>T000784</h1> <p>Lynn Booth</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50784" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.196973, lng:-118.120645},
		info_str: '<h1>T000762</h1> <p>Siddarth Dasgupta</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50762" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.1478, lng:-118.1445},
		info_str: '<h1>T000999</h1> <p>csn-field-1.gps.caltech.edu</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50999" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.09813, lng:-118.1853},
		info_str: '<h1>T000238</h1> <p>Sandya</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50238" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.13614, lng:-118.12793},
		info_str: '<h1>T000277</h1> <p>Time Test SE</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50277" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.125694, lng:-118.119114},
		info_str: '<h1>T000914</h1> <p>USC UPH residence</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50914" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.0058513, lng:-118.3357161},
		info_str: '<h1>T000887</h1> <p>Goulet</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50887" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:33.5992009, lng:-117.8847019},
		info_str: '<h1>T000847</h1> <p>Panic residence</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50847" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:34.19283, lng:-118.10776},
		info_str: '<h1>T000104</h1> <p>Gurnis home</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50104" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:47.6074856, lng:-122.3382418},
		info_str: '<h1>T001251</h1> <p>Lu</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/51251" target="_blank">Link</a></p>'
	},
	{
		coords: {lat:43.5385, lng:-110.814},
		info_str: '<h1>T000899</h1> <p>Jackson Hole Simmons</p> <p>Real Time Records: <a href="http://csn1.gps.caltech.edu/client/50899" target="_blank">Link</a></p>'
	},
];
