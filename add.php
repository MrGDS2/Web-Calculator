<?php

header('Access-Control-Allow-Origin: *');
header('content-type: application/json');

use Kreait\Firebase\Factory;
use Kreait\Firebase\ServiceAccount;

/**Set Array for post values on submit**/
 $data= array(

'get'=> $_GET,
 'post'=> $_POST


);    
  

$result=0;
$result=array_sum($data['post']);//add all in array


echo json_encode($data);//encode for webpage


require_once './vendor/autoload.php';



$serviceAccount = ServiceAccount::fromJsonFile(__DIR__.'/secret/web-calculator2019-b136512825a4.json');
$firebase = (new Factory)->withServiceAccount($serviceAccount)->withDatabaseUri('https://web-calculator2019.firebaseio.com/')->create();
$db = $firebase->getDatabase();
$reference = $db->getReference('results')->set([
'val'=>$result
]);

    





?>
