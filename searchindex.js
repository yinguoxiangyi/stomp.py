Search.setIndex({envversion:47,filenames:["api","commandline","index","intro","modules","quickstart","stomp","stomp.adapter","stomp.test"],objects:{"":{stomp:[6,0,0,"-"]},"stomp.adapter":{multicast:[7,0,0,"-"]},"stomp.adapter.multicast":{MulticastConnection:[7,1,1,""],MulticastTransport:[7,1,1,""]},"stomp.adapter.multicast.MulticastConnection":{connect:[7,3,1,""],disconnect:[7,3,1,""],send_frame:[7,3,1,""],subscribe:[7,3,1,""],unsubscribe:[7,3,1,""]},"stomp.adapter.multicast.MulticastTransport":{attempt_connection:[7,3,1,""],process_frame:[7,3,1,""],receive:[7,3,1,""],send:[7,3,1,""],stop:[7,3,1,""]},"stomp.backward":{gcd:[6,2,1,""],get_errno:[6,2,1,""]},"stomp.backward2":{decode:[6,2,1,""],encode:[6,2,1,""],input_prompt:[6,2,1,""],join:[6,2,1,""],pack:[6,2,1,""]},"stomp.backward3":{decode:[6,2,1,""],encode:[6,2,1,""],input_prompt:[6,2,1,""],join:[6,2,1,""],pack:[6,2,1,""]},"stomp.backwardsock26":{get_socket:[6,2,1,""]},"stomp.connect":{BaseConnection:[6,1,1,""],StompConnection10:[6,1,1,""],StompConnection11:[6,1,1,""],StompConnection12:[6,1,1,""]},"stomp.connect.BaseConnection":{get_listener:[6,3,1,""],get_ssl:[6,3,1,""],is_connected:[6,3,1,""],remove_listener:[6,3,1,""],set_listener:[6,3,1,""],set_ssl:[6,3,1,""],start:[6,3,1,""],stop:[6,3,1,""]},"stomp.connect.StompConnection10":{disconnect:[6,3,1,""]},"stomp.connect.StompConnection11":{disconnect:[6,3,1,""]},"stomp.connect.StompConnection12":{disconnect:[6,3,1,""]},"stomp.exception":{ConnectFailedException:[6,4,1,""],ConnectionClosedException:[6,4,1,""],InterruptedException:[6,4,1,""],NotConnectedException:[6,4,1,""]},"stomp.listener":{ConnectionListener:[6,1,1,""],HeartbeatListener:[6,1,1,""],PrintingListener:[6,1,1,""],Publisher:[6,1,1,""],StatsListener:[6,1,1,""],TestListener:[6,1,1,""],WaitingListener:[6,1,1,""]},"stomp.listener.ConnectionListener":{on_before_message:[6,3,1,""],on_connected:[6,3,1,""],on_connecting:[6,3,1,""],on_disconnected:[6,3,1,""],on_error:[6,3,1,""],on_heartbeat:[6,3,1,""],on_heartbeat_timeout:[6,3,1,""],on_message:[6,3,1,""],on_receipt:[6,3,1,""],on_send:[6,3,1,""]},"stomp.listener.HeartbeatListener":{on_connected:[6,3,1,""],on_disconnected:[6,3,1,""],on_heartbeat:[6,3,1,""],on_message:[6,3,1,""],on_send:[6,3,1,""]},"stomp.listener.PrintingListener":{on_before_message:[6,3,1,""],on_connected:[6,3,1,""],on_connecting:[6,3,1,""],on_disconnected:[6,3,1,""],on_error:[6,3,1,""],on_heartbeat:[6,3,1,""],on_heartbeat_timeout:[6,3,1,""],on_message:[6,3,1,""],on_receipt:[6,3,1,""],on_send:[6,3,1,""]},"stomp.listener.Publisher":{get_listener:[6,3,1,""],remove_listener:[6,3,1,""],set_listener:[6,3,1,""]},"stomp.listener.StatsListener":{on_connecting:[6,3,1,""],on_disconnected:[6,3,1,""],on_error:[6,3,1,""],on_heartbeat_timeout:[6,3,1,""],on_message:[6,3,1,""],on_send:[6,3,1,""]},"stomp.listener.TestListener":{get_latest_message:[6,3,1,""],on_message:[6,3,1,""],wait_for_message:[6,3,1,""]},"stomp.listener.WaitingListener":{on_receipt:[6,3,1,""],wait_on_receipt:[6,3,1,""]},"stomp.protocol":{Protocol10:[6,1,1,""],Protocol11:[6,1,1,""],Protocol12:[6,1,1,""]},"stomp.protocol.Protocol10":{abort:[6,3,1,""],ack:[6,3,1,""],begin:[6,3,1,""],commit:[6,3,1,""],connect:[6,3,1,""],disconnect:[6,3,1,""],send:[6,3,1,""],send_frame:[6,3,1,""],subscribe:[6,3,1,""],unsubscribe:[6,3,1,""]},"stomp.protocol.Protocol11":{abort:[6,3,1,""],ack:[6,3,1,""],begin:[6,3,1,""],commit:[6,3,1,""],connect:[6,3,1,""],disconnect:[6,3,1,""],nack:[6,3,1,""],send:[6,3,1,""],send_frame:[6,3,1,""],subscribe:[6,3,1,""],unsubscribe:[6,3,1,""]},"stomp.protocol.Protocol12":{ack:[6,3,1,""],connect:[6,3,1,""],nack:[6,3,1,""],send:[0,3,1,""],subscribe:[0,3,1,""]},"stomp.test":{basic_test:[8,0,0,"-"],cli_test:[8,0,0,"-"],misc_test:[8,0,0,"-"],multicast_test:[8,0,0,"-"],p2_backward_test:[8,0,0,"-"],p2_nonascii_test:[8,0,0,"-"],p3_backward_test:[8,0,0,"-"],p3_nonascii_test:[8,0,0,"-"],rabbitmq_test:[8,0,0,"-"],s10_test:[8,0,0,"-"],s11_test:[8,0,0,"-"],s12_test:[8,0,0,"-"],ss_test:[8,0,0,"-"],ssl_test:[8,0,0,"-"],stompserver_test:[8,0,0,"-"],testutils:[8,0,0,"-"],transport_test:[8,0,0,"-"],utils_test:[8,0,0,"-"]},"stomp.test.basic_test":{TestBasicSend:[8,1,1,""],TestConnectionErrors:[8,1,1,""],TestIPV6Send:[8,1,1,""]},"stomp.test.basic_test.TestBasicSend":{setUp:[8,3,1,""],tearDown:[8,3,1,""],test_abort:[8,3,1,""],test_basic:[8,3,1,""],test_childinterrupt:[8,3,1,""],test_clientack:[8,3,1,""],test_clientnack:[8,3,1,""],test_commit:[8,3,1,""],test_specialchars:[8,3,1,""],test_timeout:[8,3,1,""]},"stomp.test.basic_test.TestConnectionErrors":{test_connect_nowait_error:[8,3,1,""],test_connect_wait_error:[8,3,1,""]},"stomp.test.basic_test.TestIPV6Send":{setUp:[8,3,1,""],tearDown:[8,3,1,""],test_ipv6:[8,3,1,""]},"stomp.test.cli_test":{TestCLI:[8,1,1,""],TestStdin:[8,1,1,""],TestStdout:[8,1,1,""]},"stomp.test.cli_test.TestCLI":{setUp:[8,3,1,""],testabort:[8,3,1,""],testcommit:[8,3,1,""],testrun:[8,3,1,""],testrunarg:[8,3,1,""],testsendfile:[8,3,1,""],testsendrec:[8,3,1,""],testssl:[8,3,1,""],teststats:[8,3,1,""],testsubscribe:[8,3,1,""]},"stomp.test.cli_test.TestStdout":{expect:[8,3,1,""],flush:[8,3,1,""],write:[8,3,1,""]},"stomp.test.misc_test":{TestMessageTransform:[8,1,1,""],TransformationListener:[8,1,1,""]},"stomp.test.misc_test.TestMessageTransform":{setUp:[8,3,1,""],tearDown:[8,3,1,""],testTransform:[8,3,1,""]},"stomp.test.misc_test.TransformationListener":{on_before_message:[8,3,1,""],on_message:[8,3,1,""]},"stomp.test.multicast_test":{TestMulticast:[8,1,1,""]},"stomp.test.multicast_test.TestMulticast":{setUp:[8,3,1,""],tearDown:[8,3,1,""],testsubscribe:[8,3,1,""],testtransactions:[8,3,1,""],testunsubscribe:[8,3,1,""]},"stomp.test.p2_backward_test":{TestBackward2:[8,1,1,""]},"stomp.test.p2_backward_test.TestBackward2":{test_decode:[8,3,1,""],test_encode:[8,3,1,""]},"stomp.test.p2_nonascii_test":{TestNonAsciiSend:[8,1,1,""]},"stomp.test.p2_nonascii_test.TestNonAsciiSend":{setUp:[8,3,1,""],tearDown:[8,3,1,""],test_send_nonascii:[8,3,1,""]},"stomp.test.p3_backward_test":{TestBackward3:[8,1,1,""]},"stomp.test.p3_backward_test.TestBackward3":{test_decode:[8,3,1,""],test_encode:[8,3,1,""]},"stomp.test.p3_nonascii_test":{TestNonAsciiSend:[8,1,1,""],TestNonAsciiSendAutoEncoding:[8,1,1,""]},"stomp.test.p3_nonascii_test.TestNonAsciiSend":{setUp:[8,3,1,""],tearDown:[8,3,1,""],test_image_send:[8,3,1,""],test_send_nonascii:[8,3,1,""]},"stomp.test.p3_nonascii_test.TestNonAsciiSendAutoEncoding":{setUp:[8,3,1,""],tearDown:[8,3,1,""],test_send_nonascii_auto_encoding:[8,3,1,""]},"stomp.test.rabbitmq_test":{TestRabbitMQSend:[8,1,1,""]},"stomp.test.rabbitmq_test.TestRabbitMQSend":{setUp:[8,3,1,""],testbasic:[8,3,1,""]},"stomp.test.s10_test":{Test10Connect:[8,1,1,""]},"stomp.test.s10_test.Test10Connect":{setUp:[8,3,1,""],tearDown:[8,3,1,""],testclientack10:[8,3,1,""],testsend10:[8,3,1,""]},"stomp.test.s11_test":{Test11Send:[8,1,1,""]},"stomp.test.s11_test.Test11Send":{test11:[8,3,1,""],testheartbeat:[8,3,1,""],testheartbeat_timeout:[8,3,1,""]},"stomp.test.s12_test":{Test12Connect:[8,1,1,""]},"stomp.test.s12_test.Test12Connect":{setUp:[8,3,1,""],tearDown:[8,3,1,""],test_specialchars12:[8,3,1,""],testclientack12:[8,3,1,""],testclientnack12:[8,3,1,""],testsend12:[8,3,1,""],testtimeout:[8,3,1,""]},"stomp.test.ss_test":{TestWithStompServer:[8,1,1,""]},"stomp.test.ss_test.TestWithStompServer":{test_disconnect:[8,3,1,""]},"stomp.test.ssl_test":{TestSSL:[8,1,1,""],TestSSLParams:[8,1,1,""]},"stomp.test.ssl_test.TestSSL":{setUp:[8,3,1,""],test_ssl_connection:[8,3,1,""]},"stomp.test.ssl_test.TestSSLParams":{setUp:[8,3,1,""],test_init_ssl_params:[8,3,1,""],test_set_ssl:[8,3,1,""]},"stomp.test.stompserver_test":{TestRabbitMQSend:[8,1,1,""]},"stomp.test.stompserver_test.TestRabbitMQSend":{setUp:[8,3,1,""],testbasic:[8,3,1,""]},"stomp.test.testutils":{TestListener:[8,1,1,""],TestStompServer:[8,1,1,""],get_environ:[8,2,1,""],get_ipv6_host:[8,2,1,""],get_rabbitmq_host:[8,2,1,""],get_standard_host:[8,2,1,""],get_standard_ssl_host:[8,2,1,""],get_stompserver_host:[8,2,1,""]},"stomp.test.testutils.TestListener":{get_latest_message:[8,3,1,""],on_message:[8,3,1,""],wait_for_message:[8,3,1,""]},"stomp.test.testutils.TestStompServer":{add_frame:[8,3,1,""],get_next_frame:[8,3,1,""],run:[8,3,1,""],start:[8,3,1,""],stop:[8,3,1,""]},"stomp.test.transport_test":{TestThreading:[8,1,1,""]},"stomp.test.transport_test.TestThreading":{setUp:[8,3,1,""],test_process_frame:[8,3,1,""],test_process_frame_empty_body:[8,3,1,""],test_process_frame_unknown_command:[8,3,1,""],test_process_frame_unknown_command_empty_body:[8,3,1,""]},"stomp.test.utils_test":{TestUtils:[8,1,1,""]},"stomp.test.utils_test.TestUtils":{test_calculate_heartbeats:[8,3,1,""],test_convert_frame_to_lines:[8,3,1,""],test_parse_headers:[8,3,1,""],test_returns_true_when_localhost:[8,3,1,""]},"stomp.transport":{BaseTransport:[6,1,1,""],Transport:[6,1,1,""]},"stomp.transport.BaseTransport":{attempt_connection:[6,3,1,""],cleanup:[6,3,1,""],get_listener:[6,3,1,""],is_connected:[6,3,1,""],notify:[6,3,1,""],override_threading:[6,3,1,""],process_frame:[6,3,1,""],receive:[6,3,1,""],remove_listener:[6,3,1,""],send:[6,3,1,""],set_connected:[6,3,1,""],set_listener:[6,3,1,""],start:[6,3,1,""],stop:[6,3,1,""],transmit:[6,3,1,""],wait_for_connection:[6,3,1,""]},"stomp.transport.Transport":{attempt_connection:[6,3,1,""],cleanup:[6,3,1,""],disconnect_socket:[6,3,1,""],get_ssl:[6,3,1,""],is_connected:[6,3,1,""],receive:[6,3,1,""],send:[6,3,1,""],set_ssl:[6,3,1,""]},"stomp.utils":{Frame:[6,1,1,""],calculate_heartbeats:[6,2,1,""],convert_frame_to_lines:[6,2,1,""],default_create_thread:[6,2,1,""],is_localhost:[6,2,1,""],length:[6,2,1,""],merge_headers:[6,2,1,""],parse_frame:[6,2,1,""],parse_headers:[6,2,1,""]},stomp:{adapter:[7,0,0,"-"],backward2:[6,0,0,"-"],backward3:[6,0,0,"-"],backward:[6,0,0,"-"],backwardsock26:[6,0,0,"-"],backwardsock:[6,0,0,"-"],colors:[6,0,0,"-"],connect:[6,0,0,"-"],constants:[6,0,0,"-"],exception:[6,0,0,"-"],listener:[6,0,0,"-"],protocol:[6,0,0,"-"],test:[8,0,0,"-"],transport:[6,0,0,"-"],utils:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","method","Python method"],"4":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:method","4":"py:exception"},terms:{"00f27fa7":[],"013c":[],"02ee3486":[],"03331e28":[],"0343eac127c0":[],"040dd22722bb":[],"04a700e7":[],"04bdfc160b19":[],"06bc4bc90c76":[],"06d1c67d29af":[],"07b5":[],"08f751db015a":[],"09afda70":[],"09c6":[],"0a721cf0fe50":[],"0d366b01":[],"0d7a":[],"0db8f18b":[],"0dfc":[],"0ebe":[],"0f145762":[],"0f95ffb985bc":[],"11ee15e7a9f8":6,"12ebe39a":[],"13411db92e00":6,"13e0":0,"13e01":0,"14aa2":0,"14ab2":0,"14b03":0,"14b04":0,"14b05":0,"14ce759a":6,"157c6c68":7,"1655bc20":[],"1665d065ec7b":[],"176e70b4a815":[],"177d":[],"17ba0313":[],"17cc08604b66":[],"193f6d24":[],"199e4aa2e73c":6,"1a34":[],"1a4d07284b7c":[],"1a55":[],"1adfa725":[],"1c08d0723c27":[],"1d5e":[],"1d62":[],"1efe7321d234":[],"1f69":[],"201a":[],"217b5d13":[],"23ca0181cd28":[],"23e2":[],"2587048a7d90":[],"2661ec27bb93":[],"27e3":[],"27ff":0,"2842d60b":[],"29adc3611bdc":[],"2a80d7105411":[],"2aaee6549600":[],"2cc3":6,"2d649e8f":[],"2dbdfa5a":[],"2ea14ba3":[],"2edfe67b":[],"2f07":[],"2fa7":[],"31992928a779":[],"331a7808":[],"333a2247b593":[],"334f9f668dd0":[],"34b58c974250":[],"374f":6,"3769169994de":[],"37bb1fa7c910":[],"37db8bcb":[],"38d8b30f":[],"39261e6b":[],"3a242d8b":[],"3b45":[],"3bf2b592":[],"3c8c":[],"3e45d75729f2":[],"3e58d0e0":[],"3ec0da40":[],"3f1a":0,"3f3a":[],"406255cc":[],"40d0":[],"40d4":[],"40e7":[],"40f586a28594":[],"415f":[],"41b5":[],"41d3":[],"41dc":[],"41f2":[],"421a":[],"422f":[],"429a":[],"42af":[],"42cf":[],"42d7":[],"42d96ec63411":6,"437f71d8":[],"43d5":[],"43e9":7,"440a":[],"441d":[],"443c":[],"4486560e":[],"44a8":[],"44e1":[],"44f0":6,"44f4":[],"451d":[],"453f":[],"454ab78":[],"4552a6c4":[],"457b":[],"459d":[],"45b0":[],"45ba":[],"461f0cfe52c4":[],"462b":[],"4656e025":[],"46a3":0,"46aa":6,"46ac":[],"46b6":[],"46ce8a7005db":[],"46d2":6,"471f7b930c7f":[],"472e":[],"474d":[],"478d":[],"47fc":[],"4821c3ad4ce":[],"483c":[],"48b0":[],"48cf":[],"48d0":[],"48d5":[],"48eb":[],"498a":[],"49a5":[],"49d4":[],"4a41":[],"4a72":0,"4a96":[],"4ab8":[],"4ae5":[],"4aee":[],"4b03":[],"4b15":[],"4b167cc0":[],"4b32":[],"4b4c":[],"4b5c":[],"4b66":[],"4b6e":[],"4b8f":[],"4ba1":[],"4bbf":[],"4bca":[],"4be1":[],"4bf5":[],"4bf7":[],"4c04":[],"4c13":[],"4c1c":[],"4c96":[],"4c97":[],"4ca7":[],"4ce6":[],"4ceb":[],"4cf5":[],"4cf6":[],"4d14":[],"4d20":[],"4d36":6,"4d414b358cf6":[],"4d49e98e4ff9":[],"4d5a":[],"4d6f":[],"4d97":[],"4dac":[],"4dc6302d":[],"4dcf":[],"4dd5":[],"4e0c":[],"4e11":0,"4e13":[],"4e36":[],"4e3b":[],"4e57":[],"4e62":[],"4e6e":[],"4eb8":[],"4f26":[],"4f30":[],"4f5e":[],"4fa3":[],"4fa59724a64d":[],"4fc2":[],"4fcc":[],"4fd4":[],"4fe0":[],"4fe7":[],"5030f24eeb44":[],"50543e0f0a6":[],"5076e8ca23b":[],"5187e977bf12":[],"51b8a7820434":[],"5216202e07f6":[],"53ae":[],"53fa":[],"561a7e14":[],"56d23430":[],"57de":[],"5812bbe4f7ca":[],"58ee":[],"5932f28c2b7f":[],"5baf842":[],"5c0ef9489c80":[],"5c60942b2e6a":[],"5c6aa785":[],"5d19a51ac9f3":[],"5dd90ee2bae":[],"5e46e9858e60":[],"5f6f7b3db1c7":[],"5fb3257e2976":[],"60de2e3c":[],"60e68a60":[],"6144710f":[],"62c0":[],"66496afa":[],"669c7d1ed53b":[],"67266b4163b7":[],"68a2df66":[],"68f9dfe4":[],"69103ca791f8":[],"69a25713a709":[],"69e4":[],"6a4ede46":[],"6a86":[],"6ae47eca":[],"6b5f2dbb7c14":[],"6b7c":[],"6cb6":[],"6cf8461f":[],"6d9e":[],"6db9":[],"6def":[],"6e61":[],"6f845716":[],"71c69af6":[],"72348a94f5c":0,"73bc":[],"744c":[],"7502e1b5":[],"7584c73c":[],"7671981ba874":[],"76d5daecba93":[],"76db5dd3":[],"777aae704b38":[],"787aa91bdd2c":[],"78a793bcf6":[],"79dfc4d0":[],"7c1c65a09a40":[],"7d07":[],"7d11":[],"7d536394":[],"7d6a":[],"7daf":[],"7e1b0d5f":[],"7eb8c9eb":[],"7f5b7e7704e0":[],"803cca94":[],"81ffb640":[],"820ed21f":[],"825a5cd6":0,"82890829e8e":[],"82b1":[],"82ea77f68a27":[],"839b9596":[],"83ab7632":6,"8417f3a1":[],"844e":[],"845e36d48412":0,"854e":[],"85d4199f":[],"85f4e5eb1e3":[],"86139ead":[],"86449a00":[],"864e":[],"86e42cf2":[],"86fc":[],"873a":[],"877c":[],"87cc":[],"87d4":[],"88ae":6,"88b1792c3143":[],"88f9":[],"898d":[],"8a7d":[],"8ac7":[],"8ad0a6362eb0":[],"8b29":[],"8b9c4fa3":[],"8ba8":0,"8c24":[],"8c69":[],"8d02":[],"8d24":[],"8d3d":[],"8d52":[],"8e03":[],"8e19":[],"8f9b1425":[],"8f9c53c51b26":[],"8fd9":[],"8fe4b1df":[],"9021d6ed30e8":[],"90ae":[],"910f":[],"912a":[],"913b":[],"916d298bfe37":[],"917d":[],"91e3":[],"91f0":[],"925a":[],"92b3f7cd24d9":[],"93a4":[],"93b7":[],"93e2770b":[],"94ac":[],"94bb":[],"95cd":[],"95e9":[],"96c0":[],"96e5":[],"97115ea2":[],"9724e58403a":[],"97a8":[],"98013c52":[],"98c7":[],"998a3f4":[],"999e":[],"99d7":[],"9a41":[],"9ab0452faae7":[],"9ac8cdf7":[],"9af36acbf487":[],"9af6":[],"9b79":[],"9bdf":[],"9c3af95b857c":[],"9c58":[],"9ce21f9":[],"9d48":[],"9dc4":[],"9dc980b3":[],"9de8":[],"9df9":[],"9e24":[],"9e3c":0,"9e51":[],"9ed1":[],"9f9b":6,"9f9bfaaf":[],"9fb3":[],"9fe9":[],"__init__":[],"__reconnect_attempts_max":6,"boolean":[0,6],"byte":[6,7],"case":[0,6,8],"char":6,"class":[0,5,6,7,8],"default":[0,1,6],"final":0,"function":6,"import":[0,5],"long":[0,6],"return":[0,6],"true":[0,5,6],"try":[0,6],a00:0,a079ac51ff3f:[],a106:[],a113:[],a127:[],a1fd:[],a236:6,a2898ab4418f:[],a292:[],a293:[],a314:[],a40a:[],a45b08fb3412:[],a47fb5d380a8:[],a4acf53e2638:[],a526:[],a537:[],a559:[],a5c3:[],a612:[],a621c7a652ff:[],a6f1:[],a730:[],a75bd4e046e0:[],a76617cb:[],a819:[],a879ea5d:[],a8d2:[],a914:[],a922:[],a98d:[],a9a9:[],a9c3:6,a9d3:[],a9ec:[],a9fd:[],aa2f:[],aa57950de68a:[],aa88:[],aab0:[],aab2:[],aac5:[],ab40:[],ab87:[],abe2ffc:[],abil:[0,1],abort:[0,1,6],about:[],ac06775a1323:[],ac44:[],ac48:[],ac8a:[],accept:0,access:[1,3,5],accord:6,accordingli:6,acf7:[],ack:[],acknowledg:0,action:0,activemq:3,actual:[0,6],ad167557:[],adapt:[],add:6,add_fram:8,addc:[],addit:[0,6],address:0,admin:[0,1,5],ae62:[],aee6:[],af6b1f65d81d:[],af9a:[],afc0:[],afec:[],after:[0,3,5,6],afterward:0,against:[3,6],agnost:6,all:[0,3,6],allow:0,also:[0,1,5,6],altern:6,amount:[],andrea:3,ani:[0,6],anyth:6,anywai:0,apach:[0,3,6],apart:1,apollo:[0,3],app:6,appli:6,arg:6,argument:[1,5,6],argv:5,arriv:6,associ:6,assum:[0,5],attack:6,attempt:[0,6],attempt_connect:[6,7],attribut:6,author:6,auto:[0,5,6,7],auto_decod:[0,6],automat:0,avail:[3,6],avoid:[0,6],awai:3,b00ba3c1:[],b033fe64f847:[],b07303c4:[],b09730efccc3:[],b0f3:[],b19828a4e949:[],b1a138500f39:[],b236:[],b2751acc:[],b2b7:6,b2ec:[],b32a:[],b345340c:[],b351:[],b390:[],b39f3136:0,b3f0:[],b4a7:[],b4a9:[],b4b64b0b371d:[],b4c0:[],b4fd1da7:[],b5a378e4:[],b628:[],b6b49ff5d282:[],b6d2:[],b6df:[],b6e5acd:[],b70f:[],b727:[],b73a:[],b8775161:[],b8d8:[],b931:[],b93f020f:[],b978:[],b9ea:[],b9f5edfb:6,baa2:[],baca:[],back:0,backward2:[],backward3:[],backward:[],backwardsock25:[],backwardsock26:[],backwardsock:[],base:[3,6,7,8],baseconnect:[6,7],basetransport:6,basic:3,basic_test:[],bb16:[],bb1cd719:[],bb394037f270:[],bb7e:[],bbc5:[],bc6f:[],bc788bf76fbb:[],bc91:[],bcef:[],bcfc:[],bdac:[],be17:[],be48:7,be6f:[],be88:[],beat:[0,6],been:[3,6],befor:[0,6],begin:[0,1,6],between:[0,6],beyond:6,bf42:[],bf49ad4f28b2:[],bf7b:[],bfc3:[],bfe5b9803599:[],bin:5,bodi:[0,5,6,7,8],both:3,brigg:[2,6],broker:[0,3,5,6,7],build:0,byte_data:6,c0207920:[],c088206f76e8:[],c1359aac:[],c14973fd:6,c201e4f0:[],c29697d36d8d:[],c364:[],c3df7142:[],c40e784abef:[],c53f8df8be29:[],c5bea735761c:[],c5f97bdc:[],c6dd05e2:[],c82a09df6bea:[],c9a6:[],ca93ba939c08:[],ca_cert:6,calcul:[0,6],calculate_heartbeat:6,call:[0,3,6],callback:6,can:[0,1,2,5,6],casteñada:3,cb55:[],cc1d:[],ccf804c33864:[],cd50:[],cd70bc6cb3db:[],cee54292:[],cert:6,cert_fil:6,cert_valid:6,certif:6,cf7b:6,cfdd:[],chang:6,char_data:6,charact:6,chaskiel:3,chb:6,check:[0,6],chueyr:3,ciciliati:3,clean:6,cleanup:6,cli:[1,3],cli_test:[],close:6,cmd:[6,7],code:3,collect:0,color:[],com:6,combin:6,come:6,commit:[0,1,6],common:6,commonnam:6,commun:[3,6],compat:6,complet:[0,6],compris:6,configur:6,conn:[0,5],connectfailedexcept:6,connection10:0,connection11:0,connection12:0,connectionclosedexcept:6,connectionlisten:[0,5,6],consequ:0,constant:[],construct:6,consum:0,contact:3,contain:[0,1,6],content:[],content_typ:[0,6],contributor:[],conveni:7,convert:6,convert_frame_to_lin:6,copi:6,copyright:6,correspond:0,could:[0,3],count:6,creat:[2,3,6],create_thread_fc:6,creation:6,current:[1,3,6],current_host_port:6,d065:[],d0d0:[],d0e72b853b5d:[],d1221927528b:[],d2a77d91:[],d2e37c2a:[],d30caa7:[],d335:[],d36c:[],d400b5ed:[],d540:[],d5e1030a9ec9:[],d6649c82:[],d67b1e21:[],d6da:[],d78b:[],d7b60bf1df59:[],d870e5e25654:[],d89b0df4d70b:7,d9bc6565eb50:[],da35:[],daa3:[],dae6069c6dd8:[],dai:3,data:6,dba1:[],dd4cd25484b2:[],de63eacbd905:[],decid:0,decod:6,ded849444e05:[],def:5,default_create_thread:6,definit:6,delai:[0,6],deprec:[0,6],descript:[0,1,6],destin:[0,1,5,6,7],detail:[0,6],detect:[0,6],determin:[0,6],develop:3,dict:0,dictionari:6,didn:3,differ:[0,1,6],dir:5,directori:5,discard:0,disconnect:[],disconnect_socket:6,discov:3,distant:3,distinct:6,divid:6,divisor:6,doesn:6,don:[0,7],done:6,drop:0,dump:1,durán:3,e3502061:[],e469840d:[],e6b8aca0:[],e89dd32a:[],e90d195be791:[],e9222725:[],e9b29c4a:[],each:[0,6],easili:3,ebc6:[],ec28f8aabfeb:[],ec5443d6:[],eca92685:[],ed910845:[],edd3:[],eec9:[],eef7:[],ef27:[],effect:6,either:[0,5,6],els:[3,6],empti:6,en1:0,enabl:[0,1,6],encod:[6,7],encoded_fram:[6,7],endless:3,enforc:[0,6],enhanc:3,ensur:6,entri:6,eof:1,equal:6,err_msg:6,errno:6,error:[1,5,6],etc:1,eugen:3,even:3,exampl:[0,6],exceed:6,except:[],execut:1,exit:[1,6],expect:8,extra:[0,6],f007:[],f0a44c3a33af:[],f0e08ccd9d9b:[],f1120ae6e096:[],f112:[],f153:[],f156b4eb3141:[],f2acb3572c8:[],f349:[],f3a019d1c9ff:6,f420aa21:[],f4442a06:6,f786:[],f80f:[],f81d9a3b:[],f8e76a4c:[],f8f6e4904ef5:[],f9d6a917:[],f9e2e6b6:[],f9ef:6,factor:[0,6],fail:[0,6],failov:0,fals:[0,6,7],fast:[],fc75275b:[],fc91:[],fdcd7b9c:[],fe80:0,fe90:0,featur:3,fernando:3,few:0,ff81:[],ffb2:[],file:[1,6],filenam:1,fill:[],find:[1,2],first:[0,3,6],flush:8,follow:[0,1,5],for_host:6,found:[0,6],foundat:6,frame:[0,6,7,8],frame_str:[6,7],frame_typ:6,from:[0,1,6,7],full:[1,3],further:2,gavin:3,gcd:6,gdaniec:3,gener:[0,6],get:[],get_environ:8,get_errno:6,get_ipv6_host:8,get_latest_messag:[6,8],get_listen:6,get_next_fram:8,get_rabbitmq_host:8,get_socket:6,get_ssl:6,get_standard_host:8,get_standard_ssl_host:8,get_stompserver_host:8,getpeercert:6,github:[0,2,3,6],give:0,given:6,grace:0,greater:6,greatest:6,grundman:3,had:3,handl:6,have:[3,6,7],header:[0,1,5,6,7,8],header_map_list:6,heart:[0,6],heartbeat:[0,6],heartbeatlisten:6,held:0,hello:5,help:[],helper:6,here:0,herebi:5,host:[0,1,6,8],host_and_port:[0,6],hostnam:[0,1,6],html:[0,6],http:[0,6],idea:0,identifi:[0,6],implement:[0,6],incept:3,incom:6,increas:[0,6],increment:6,independ:6,index:2,individu:[0,6],info:[0,1,2,3,6],inform:[5,6],initi:[0,6],initialis:0,inlin:1,input:6,input_prompt:6,insid:0,instal:[1,3,5],instead:[0,1,6],inter:3,interact:0,interfac:[0,5,6],intermitt:3,interrupt:6,interruptedexcept:6,introduct:[],invok:6,ipv6:[0,6],is_connect:6,is_localhost:6,issu:[2,3],itch:3,jason:[2,6],jasonrbrigg:6,jayson:3,jbossmessag:3,joe:3,join:[5,6],julian:3,just:0,keep:[0,6],keepal:[0,6],kei:6,key_fil:6,keyword_head:[0,6,7],kwarg:6,larg:1,last:6,least:5,length:[0,6],level:6,lib:5,librari:[3,5,6],licens:6,list:[0,3,5,6],listen:[],littl:3,local:[0,6],localhost:[1,5,6],log:1,login:[0,6],longer:[0,6],look:[0,3],loop:6,loopback:[0,6],lost:6,machin:0,main:6,make_send:[],man:6,manag:6,map:[0,6],marker:[],martin:3,maximum:[0,6],mcast:7,mean:[0,6],meanwhil:[],mechan:6,member:6,mention:[0,6],merg:0,merge_head:6,messag:[],method:[0,6,7],methodnam:8,middl:6,might:0,mime:[0,6],misc_test:[],modul:[],more:[0,1,5,6],mostli:6,msg:[],much:[],multicast:[],multicast_test:[],multicastconnect:7,multicasttransport:7,multipl:[0,6],must:[],mybrok:0,mylisten:5,nack:[],name:[0,6,8],need:[0,5,6],network:6,next:0,non:[0,7],none:[0,6,7,8],normal:1,notconnectedexcept:6,note:[0,1,3,6],notifi:6,number:[0,1,3,6],object:[6,8],obvious:7,occasion:[0,6],off:1,offset:6,on_before_messag:[0,6,8],on_connect:[0,6],on_disconnect:[0,6],on_error:[5,6],on_heartbeat:6,on_heartbeat_timeout:6,on_messag:[0,5,6,8],on_receipt:[0,6],on_send:[0,6],onc:[0,1,5,6],onli:[0,3],oper:[0,6],option:[0,1,6],order:[0,6],org:6,other:[0,3,7],out:6,outgo:6,output:0,outsid:6,outstand:[2,3],overrid:6,override_thread:6,own:[0,6],p2_backward_test:[],p2_nonascii_test:[],p3_backward_test:[],p3_nonascii_test:[],pack:6,packag:[],packet:[0,6],page:[0,2,6],pair:6,param:6,paramet:[0,1,6],pars:6,parse_fram:6,parse_head:6,pass:[0,5],passcod:[0,6,7],password:[0,1,5,6],past:3,path:6,payload:6,per:[0,6],percentag:[0,6],perform:[0,6],perfunctorili:3,period:6,persist:[],pictur:3,piec:6,pieuchot:3,pip:[3,5],platform:3,plu:6,point:[0,6],pop:[],port:[0,1,6,8],posit:6,possibl:0,pre:6,predomin:6,prefer_localhost:[0,6],previou:[0,6],print:[0,1,5],printinglisten:[0,6],process:[0,6],process_fram:[6,7],program:1,programmat:[1,5],project:[3,6],prompt:[1,6],protocol10:6,protocol11:6,protocol12:[0,6,7],protocol:[],protocol_tlsv1:6,protocol_x:6,provid:[0,1,5,6],publish:6,py2:6,py3:6,python2:6,python3:[5,6],python:[3,5,6],queue:[0,1,5,6],quick:[],quit:1,rabbitmq:3,rabbitmq_test:[],rafael:3,rais:[3,6],random:[0,6],randomli:[0,3,6],read:6,readi:6,real:6,realli:6,reattempt:[0,6],receipt:[0,6,7,8],receiv:[],reconnect:[0,6],reconnect_attempts_max:[0,6],reconnect_sleep_increas:[0,6],reconnect_sleep_initi:[0,6],reconnect_sleep_jitt:[0,6],reconnect_sleep_max:[0,6],record:[1,6],reestablish:6,refer:5,regardless:[0,6],regist:6,registri:6,remot:0,remov:6,remove_listen:6,report:3,repres:[0,6],request:[0,3,6],requir:[0,1],reserv:6,reset:6,resourc:0,respons:[0,1,6],result:6,retri:[],right:6,rise:3,roi:3,rollback:1,run:[0,1,3,5,6,8],runtest:8,s10_test:[],s11_test:[],s12_test:[],same:[0,6],scheid:3,schobel:3,scratch:3,script:1,scriptabl:3,search:2,second:[0,6],see:[0,5,6],seen:0,self:5,send:[],send_fram:[6,7],sender:[],sendfil:1,sendrec:1,sendrepli:1,sent:[0,1,6],separ:0,server:[0,1,6],session:0,set:[0,1,3,6],set_connect:6,set_listen:[0,5,6],set_ssl:[0,6],setup:[0,8],shb:6,should:6,show:1,shutdown:[0,6],side:6,sign:6,signatur:6,signific:0,significantli:3,simpl:0,simplest:0,simpli:[0,6],sinc:3,singl:6,site:5,sitepackag:5,skyttä:3,sleep:[0,5,6],smidgen:3,socket:[0,6,7],softwar:6,some:[0,1,6],someth:3,sort:[0,6],sourc:6,specif:[0,6],specifi:[0,1,6],spent:3,ss_test:[],ssl:[1,6],ssl_ca_cert:[0,6],ssl_cert_fil:[0,6],ssl_cert_valid:[0,6],ssl_key_fil:[0,6],ssl_test:[],ssl_version:[0,6],sslsocket:6,stall:3,stamped:[0,6],standalon:1,standard:[0,7],start:[],startup:5,stat:[0,1],statist:[1,6],statslisten:[0,6,8],step:0,still:7,stomp:[],stompconnection10:6,stompconnection11:6,stompconnection12:[0,6],stompserv:3,stompserver_test:[],stop:[6,7,8],string:6,structur:6,strulyov:3,subclass:0,submodul:[],subpackag:[],subscrib:[0,1,5,6,7],subscript:[0,6],subsequ:3,success:[0,5],suit:3,sun:3,support:[0,3,6],system:[0,1,6],tatiana:3,tbc:[],tcp:6,teardown:8,telecommun:3,tell:0,test10connect:8,test11:8,test11send:8,test12connect:8,test1:0,test2:0,test3:0,test4:0,test5:0,test:[],test_abort:8,test_bas:8,test_calculate_heartbeat:8,test_childinterrupt:8,test_clientack:8,test_clientnack:8,test_commit:8,test_connect_nowait_error:8,test_connect_wait_error:8,test_convert_frame_to_lin:8,test_decod:8,test_disconnect:8,test_encod:8,test_image_send:8,test_init_ssl_param:8,test_ipv6:8,test_parse_head:8,test_process_fram:8,test_process_frame_empty_bodi:8,test_process_frame_unknown_command:8,test_process_frame_unknown_command_empty_bodi:8,test_returns_true_when_localhost:8,test_send_nonascii:8,test_send_nonascii_auto_encod:8,test_set_ssl:8,test_specialchar:8,test_specialchars12:8,test_ssl_connect:8,test_threads_dont_wedg:[],test_timeout:8,testabort:8,testbackward2:8,testbackward3:8,testbas:8,testbasicsend:8,testcas:8,testcli:8,testclientack10:8,testclientack12:8,testclientnack12:8,testcommit:8,testconnectionerror:8,testheartbeat:8,testheartbeat_timeout:8,testipv6send:8,testlisten:[6,8],testmessagetransform:8,testmulticast:8,testnonasciisend:8,testnonasciisendautoencod:8,testrabbitmqsend:8,testrun:8,testrunarg:8,testsend10:8,testsend12:8,testsendfil:8,testsendrec:8,testssl:8,testsslparam:8,teststat:8,teststdin:8,teststdout:8,teststompserv:8,testsubscrib:8,testthread:8,testtimeout:8,testtransact:8,testtransform:8,testunsubscrib:8,testutil:[],testwithstompserv:8,text:3,than:[0,6],thei:0,thi:[0,1,6],those:3,thread:[0,6],threading_test:[],three:[0,6],through:[0,7],thrown:6,thu:[],time:[0,3,5,6],timeout:[0,6],togeth:6,topic:[0,1,6],transact:[],transformationlisten:8,transmiss:6,transmit:[0,6],transport:[],transport_test:[],try_loopback_connect:[0,6],tupl:[0,6],turn:[0,6],twice:[0,6],txid:0,txt:8,type:[0,1,5,6],typic:7,underli:6,uniqu:[0,6],unittest:8,unix:5,unless:6,unsubscrib:[0,1,6,7],until:[0,6],usag:[0,1],use_ssl:[0,6],user:[0,1,6],usernam:[0,1,5,6,7],usual:6,util:[],utils_test:[],valid:6,validation_funct:6,valu:[0,6],vantuyl:3,variat:3,variou:6,ver:1,verbos:1,veri:[],version:[0,1,3,5,6],vhost:[0,6],via:[3,6],view:[2,3],vill:3,virtual:[0,6],virtualbox:3,wai:0,wait:[0,5,6,7],wait_for_connect:6,wait_for_messag:[6,8],wait_on_receipt:[0,6,7],waitinglisten:[6,8],want:[3,6,7],wedg:[],were:3,what:[1,6],when:[0,3,6],whenev:6,where:[0,1,6],which:[0,3,6],within:1,without:6,work:3,world:5,wrap:6,write:8,www:6,x509:6,year:3,you:[0,1,2,3,5,6,7],your:[0,6]},titles:["Using the API","Using the Command-line client application","Stomp.py 4.1.6 documentation","Introduction to Stomp.py","stomp","Quick start","stomp package","stomp.adapter package","stomp.test package"],titleterms:{about:3,ack:0,adapt:7,api:[0,5],applic:1,backward2:6,backward3:6,backward:6,backwardsock25:6,backwardsock26:6,backwardsock:6,basic_test:8,cli_test:8,client:[1,5],color:6,command:[1,5],connect:[0,6],constant:6,content:[6,7,8],contributor:3,disconnect:0,document:2,establish:0,except:6,get:3,help:3,indic:2,introduct:3,line:[1,5],listen:6,messag:0,misc_test:8,modul:[6,7,8],multicast:7,multicast_test:8,nack:0,p2_backward_test:8,p2_nonascii_test:8,p3_backward_test:8,p3_nonascii_test:8,packag:[6,7,8],protocol:6,quick:5,rabbitmq_test:8,receiv:0,s10_test:8,s11_test:8,s12_test:8,send:0,ss_test:8,ssl_test:8,start:5,stomp:[2,3,4,5,6,7,8],stompserver_test:8,submodul:[6,7,8],subpackag:6,tabl:2,test:8,testutil:8,threading_test:8,transact:0,transport:6,transport_test:8,util:6,utils_test:8}})