Search.setIndex({docnames:["README","configuration","data","index","inference","package/modules","package/opennmt","package/opennmt.config","package/opennmt.constants","package/opennmt.decoders","package/opennmt.decoders.decoder","package/opennmt.decoders.rnn_decoder","package/opennmt.decoders.self_attention_decoder","package/opennmt.encoders","package/opennmt.encoders.conv_encoder","package/opennmt.encoders.encoder","package/opennmt.encoders.mean_encoder","package/opennmt.encoders.rnn_encoder","package/opennmt.encoders.self_attention_encoder","package/opennmt.inputters","package/opennmt.inputters.inputter","package/opennmt.inputters.record_inputter","package/opennmt.inputters.text_inputter","package/opennmt.layers","package/opennmt.layers.bridge","package/opennmt.layers.position","package/opennmt.layers.reducer","package/opennmt.layers.transformer","package/opennmt.models","package/opennmt.models.model","package/opennmt.models.sequence_classifier","package/opennmt.models.sequence_tagger","package/opennmt.models.sequence_to_sequence","package/opennmt.models.transformer","package/opennmt.tokenizers","package/opennmt.tokenizers.opennmt_tokenizer","package/opennmt.tokenizers.tokenizer","package/opennmt.utils","package/opennmt.utils.beam_search","package/opennmt.utils.cell","package/opennmt.utils.data","package/opennmt.utils.decay","package/opennmt.utils.evaluator","package/opennmt.utils.hooks","package/opennmt.utils.losses","package/opennmt.utils.misc","package/opennmt.utils.optim","package/opennmt.utils.parallel","package/opennmt.utils.vocab","serving","tokenization","training"],envversion:53,filenames:["README.md","configuration.md","data.md","index.rst","inference.md","package/modules.rst","package/opennmt.rst","package/opennmt.config.rst","package/opennmt.constants.rst","package/opennmt.decoders.rst","package/opennmt.decoders.decoder.rst","package/opennmt.decoders.rnn_decoder.rst","package/opennmt.decoders.self_attention_decoder.rst","package/opennmt.encoders.rst","package/opennmt.encoders.conv_encoder.rst","package/opennmt.encoders.encoder.rst","package/opennmt.encoders.mean_encoder.rst","package/opennmt.encoders.rnn_encoder.rst","package/opennmt.encoders.self_attention_encoder.rst","package/opennmt.inputters.rst","package/opennmt.inputters.inputter.rst","package/opennmt.inputters.record_inputter.rst","package/opennmt.inputters.text_inputter.rst","package/opennmt.layers.rst","package/opennmt.layers.bridge.rst","package/opennmt.layers.position.rst","package/opennmt.layers.reducer.rst","package/opennmt.layers.transformer.rst","package/opennmt.models.rst","package/opennmt.models.model.rst","package/opennmt.models.sequence_classifier.rst","package/opennmt.models.sequence_tagger.rst","package/opennmt.models.sequence_to_sequence.rst","package/opennmt.models.transformer.rst","package/opennmt.tokenizers.rst","package/opennmt.tokenizers.opennmt_tokenizer.rst","package/opennmt.tokenizers.tokenizer.rst","package/opennmt.utils.rst","package/opennmt.utils.beam_search.rst","package/opennmt.utils.cell.rst","package/opennmt.utils.data.rst","package/opennmt.utils.decay.rst","package/opennmt.utils.evaluator.rst","package/opennmt.utils.hooks.rst","package/opennmt.utils.losses.rst","package/opennmt.utils.misc.rst","package/opennmt.utils.optim.rst","package/opennmt.utils.parallel.rst","package/opennmt.utils.vocab.rst","serving.md","tokenization.md","training.md"],objects:{"":{opennmt:[6,0,0,"-"]},"opennmt.config":{load_config:[7,1,1,""],load_model_module:[7,1,1,""]},"opennmt.decoders":{decoder:[10,0,0,"-"],rnn_decoder:[11,0,0,"-"],self_attention_decoder:[12,0,0,"-"]},"opennmt.decoders.decoder":{Decoder:[10,2,1,""],get_embedding_fn:[10,1,1,""],get_sampling_probability:[10,1,1,""],logits_to_cum_log_probs:[10,1,1,""]},"opennmt.decoders.decoder.Decoder":{decode:[10,3,1,""],dynamic_decode:[10,3,1,""],dynamic_decode_and_search:[10,3,1,""]},"opennmt.decoders.rnn_decoder":{AttentionalRNNDecoder:[11,2,1,""],MultiAttentionalRNNDecoder:[11,2,1,""],RNNDecoder:[11,2,1,""]},"opennmt.decoders.rnn_decoder.AttentionalRNNDecoder":{__init__:[11,3,1,""]},"opennmt.decoders.rnn_decoder.MultiAttentionalRNNDecoder":{__init__:[11,3,1,""]},"opennmt.decoders.rnn_decoder.RNNDecoder":{__init__:[11,3,1,""],decode:[11,3,1,""],dynamic_decode:[11,3,1,""],dynamic_decode_and_search:[11,3,1,""]},"opennmt.decoders.self_attention_decoder":{SelfAttentionDecoder:[12,2,1,""]},"opennmt.decoders.self_attention_decoder.SelfAttentionDecoder":{__init__:[12,3,1,""],decode:[12,3,1,""],dynamic_decode:[12,3,1,""],dynamic_decode_and_search:[12,3,1,""]},"opennmt.encoders":{conv_encoder:[14,0,0,"-"],encoder:[15,0,0,"-"],mean_encoder:[16,0,0,"-"],rnn_encoder:[17,0,0,"-"],self_attention_encoder:[18,0,0,"-"]},"opennmt.encoders.conv_encoder":{ConvEncoder:[14,2,1,""]},"opennmt.encoders.conv_encoder.ConvEncoder":{__init__:[14,3,1,""],encode:[14,3,1,""]},"opennmt.encoders.encoder":{Encoder:[15,2,1,""],ParallelEncoder:[15,2,1,""],SequentialEncoder:[15,2,1,""]},"opennmt.encoders.encoder.Encoder":{encode:[15,3,1,""]},"opennmt.encoders.encoder.ParallelEncoder":{__init__:[15,3,1,""],encode:[15,3,1,""]},"opennmt.encoders.encoder.SequentialEncoder":{__init__:[15,3,1,""],encode:[15,3,1,""]},"opennmt.encoders.mean_encoder":{MeanEncoder:[16,2,1,""]},"opennmt.encoders.mean_encoder.MeanEncoder":{encode:[16,3,1,""]},"opennmt.encoders.rnn_encoder":{BidirectionalRNNEncoder:[17,2,1,""],GoogleRNNEncoder:[17,2,1,""],PyramidalRNNEncoder:[17,2,1,""],RNNEncoder:[17,2,1,""],UnidirectionalRNNEncoder:[17,2,1,""]},"opennmt.encoders.rnn_encoder.BidirectionalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.GoogleRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.PyramidalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.RNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.rnn_encoder.UnidirectionalRNNEncoder":{__init__:[17,3,1,""],encode:[17,3,1,""]},"opennmt.encoders.self_attention_encoder":{SelfAttentionEncoder:[18,2,1,""]},"opennmt.encoders.self_attention_encoder.SelfAttentionEncoder":{__init__:[18,3,1,""],encode:[18,3,1,""]},"opennmt.inputters":{inputter:[20,0,0,"-"],record_inputter:[21,0,0,"-"],text_inputter:[22,0,0,"-"]},"opennmt.inputters.inputter":{Inputter:[20,2,1,""],MixedInputter:[20,2,1,""],MultiInputter:[20,2,1,""],ParallelInputter:[20,2,1,""]},"opennmt.inputters.inputter.Inputter":{add_process_hooks:[20,3,1,""],get_length:[20,3,1,""],get_serving_input_receiver:[20,3,1,""],initialize:[20,3,1,""],make_dataset:[20,3,1,""],process:[20,3,1,""],remove_data_field:[20,3,1,""],set_data_field:[20,3,1,""],transform:[20,3,1,""],transform_data:[20,3,1,""],visualize:[20,3,1,""]},"opennmt.inputters.inputter.MixedInputter":{__init__:[20,3,1,""],get_length:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""]},"opennmt.inputters.inputter.MultiInputter":{initialize:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""],visualize:[20,3,1,""]},"opennmt.inputters.inputter.ParallelInputter":{__init__:[20,3,1,""],get_length:[20,3,1,""],make_dataset:[20,3,1,""],transform:[20,3,1,""]},"opennmt.inputters.record_inputter":{SequenceRecordInputter:[21,2,1,""]},"opennmt.inputters.record_inputter.SequenceRecordInputter":{__init__:[21,3,1,""],get_length:[21,3,1,""],initialize:[21,3,1,""],make_dataset:[21,3,1,""],transform:[21,3,1,""]},"opennmt.inputters.text_inputter":{CharConvEmbedder:[22,2,1,""],TextInputter:[22,2,1,""],WordEmbedder:[22,2,1,""],load_pretrained_embeddings:[22,1,1,""],tokens_to_chars:[22,1,1,""],visualize_embeddings:[22,1,1,""]},"opennmt.inputters.text_inputter.CharConvEmbedder":{__init__:[22,3,1,""],initialize:[22,3,1,""],transform:[22,3,1,""],visualize:[22,3,1,""]},"opennmt.inputters.text_inputter.TextInputter":{get_length:[22,3,1,""],initialize:[22,3,1,""],make_dataset:[22,3,1,""],transform:[22,3,1,""]},"opennmt.inputters.text_inputter.WordEmbedder":{__init__:[22,3,1,""],initialize:[22,3,1,""],transform:[22,3,1,""],visualize:[22,3,1,""]},"opennmt.layers":{bridge:[24,0,0,"-"],position:[25,0,0,"-"],reducer:[26,0,0,"-"],transformer:[27,0,0,"-"]},"opennmt.layers.bridge":{Bridge:[24,2,1,""],CopyBridge:[24,2,1,""],DenseBridge:[24,2,1,""],ZeroBridge:[24,2,1,""],assert_state_is_compatible:[24,1,1,""]},"opennmt.layers.bridge.Bridge":{__call__:[24,3,1,""]},"opennmt.layers.bridge.DenseBridge":{__init__:[24,3,1,""]},"opennmt.layers.position":{PositionEmbedder:[25,2,1,""],PositionEncoder:[25,2,1,""],make_positions:[25,1,1,""]},"opennmt.layers.position.PositionEmbedder":{__init__:[25,3,1,""],encode:[25,3,1,""]},"opennmt.layers.position.PositionEncoder":{__call__:[25,3,1,""],apply:[25,3,1,""],apply_one:[25,3,1,""],encode:[25,3,1,""],encode_sequence:[25,3,1,""]},"opennmt.layers.reducer":{ConcatReducer:[26,2,1,""],JoinReducer:[26,2,1,""],MultiplyReducer:[26,2,1,""],Reducer:[26,2,1,""],SumReducer:[26,2,1,""],pad_in_time:[26,1,1,""],pad_n_with_identity:[26,1,1,""],pad_with_identity:[26,1,1,""],roll_sequence:[26,1,1,""]},"opennmt.layers.reducer.ConcatReducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""]},"opennmt.layers.reducer.JoinReducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""]},"opennmt.layers.reducer.MultiplyReducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""]},"opennmt.layers.reducer.Reducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""],zip_and_reduce:[26,3,1,""]},"opennmt.layers.reducer.SumReducer":{reduce:[26,3,1,""],reduce_sequence:[26,3,1,""]},"opennmt.layers.transformer":{build_future_mask:[27,1,1,""],build_sequence_mask:[27,1,1,""],combine_heads:[27,1,1,""],dot_product_attention:[27,1,1,""],drop_and_add:[27,1,1,""],feed_forward:[27,1,1,""],fused_projection:[27,1,1,""],multi_head_attention:[27,1,1,""],norm:[27,1,1,""],split_heads:[27,1,1,""],tile_sequence_length:[27,1,1,""]},"opennmt.models":{model:[29,0,0,"-"],sequence_classifier:[30,0,0,"-"],sequence_tagger:[31,0,0,"-"],sequence_to_sequence:[32,0,0,"-"],transformer:[33,0,0,"-"]},"opennmt.models.model":{Model:[29,2,1,""]},"opennmt.models.model.Model":{input_fn:[29,3,1,""],model_fn:[29,3,1,""],print_prediction:[29,3,1,""],serving_input_fn:[29,3,1,""]},"opennmt.models.sequence_classifier":{SequenceClassifier:[30,2,1,""]},"opennmt.models.sequence_classifier.SequenceClassifier":{__init__:[30,3,1,""],print_prediction:[30,3,1,""]},"opennmt.models.sequence_tagger":{SequenceTagger:[31,2,1,""],flag_bioes_tags:[31,1,1,""]},"opennmt.models.sequence_tagger.SequenceTagger":{__init__:[31,3,1,""],print_prediction:[31,3,1,""]},"opennmt.models.sequence_to_sequence":{SequenceToSequence:[32,2,1,""],shift_target_sequence:[32,1,1,""]},"opennmt.models.sequence_to_sequence.SequenceToSequence":{__init__:[32,3,1,""],print_prediction:[32,3,1,""]},"opennmt.models.transformer":{Transformer:[33,2,1,""]},"opennmt.models.transformer.Transformer":{__init__:[33,3,1,""]},"opennmt.tokenizers":{add_command_line_arguments:[34,1,1,""],build_tokenizer:[34,1,1,""],tokenizer:[36,0,0,"-"]},"opennmt.tokenizers.tokenizer":{CharacterTokenizer:[36,2,1,""],SpaceTokenizer:[36,2,1,""],Tokenizer:[36,2,1,""]},"opennmt.tokenizers.tokenizer.Tokenizer":{__init__:[36,3,1,""],detokenize:[36,3,1,""],detokenize_stream:[36,3,1,""],initialize:[36,3,1,""],tokenize:[36,3,1,""],tokenize_stream:[36,3,1,""]},"opennmt.utils":{beam_search:[38,0,0,"-"],cell:[39,0,0,"-"],data:[40,0,0,"-"],decay:[41,0,0,"-"],evaluator:[42,0,0,"-"],hooks:[43,0,0,"-"],losses:[44,0,0,"-"],misc:[45,0,0,"-"],optim:[46,0,0,"-"],parallel:[47,0,0,"-"],vocab:[48,0,0,"-"]},"opennmt.utils.beam_search":{beam_search:[38,1,1,""],compute_batch_indices:[38,1,1,""],compute_topk_scores_and_seq:[38,1,1,""]},"opennmt.utils.cell":{build_cell:[39,1,1,""]},"opennmt.utils.data":{batch_train_dataset:[40,1,1,""],filter_examples_by_length:[40,1,1,""],filter_irregular_batches:[40,1,1,""]},"opennmt.utils.decay":{noam_decay:[41,1,1,""]},"opennmt.utils.evaluator":{BLEUDetokEvaluator:[42,2,1,""],BLEUEvaluator:[42,2,1,""],ExternalEvaluator:[42,2,1,""],external_evaluation_fn:[42,1,1,""]},"opennmt.utils.evaluator.BLEUDetokEvaluator":{name:[42,3,1,""]},"opennmt.utils.evaluator.BLEUEvaluator":{name:[42,3,1,""],score:[42,3,1,""]},"opennmt.utils.evaluator.ExternalEvaluator":{__call__:[42,3,1,""],name:[42,4,1,""],score:[42,3,1,""]},"opennmt.utils.hooks":{CountersHook:[43,2,1,""],LogParametersCountHook:[43,2,1,""],SaveEvaluationPredictionHook:[43,2,1,""]},"opennmt.utils.hooks.CountersHook":{after_run:[43,3,1,""],before_run:[43,3,1,""],begin:[43,3,1,""]},"opennmt.utils.hooks.LogParametersCountHook":{begin:[43,3,1,""]},"opennmt.utils.hooks.SaveEvaluationPredictionHook":{__init__:[43,3,1,""],after_run:[43,3,1,""],before_run:[43,3,1,""],begin:[43,3,1,""],end:[43,3,1,""]},"opennmt.utils.losses":{cross_entropy_loss:[44,1,1,""],cross_entropy_sequence_loss:[44,1,1,""]},"opennmt.utils.misc":{add_dict_to_collection:[45,1,1,""],count_lines:[45,1,1,""],count_parameters:[45,1,1,""],extract_batches:[45,1,1,""],extract_prefixed_keys:[45,1,1,""],get_dict_from_collection:[45,1,1,""],item_or_tuple:[45,1,1,""],print_bytes:[45,1,1,""]},"opennmt.utils.optim":{get_optimizer_class:[46,1,1,""],learning_rate_decay_fn:[46,1,1,""],optimize:[46,1,1,""]},"opennmt.utils.parallel":{GraphDispatcher:[47,2,1,""],split_batch:[47,1,1,""]},"opennmt.utils.parallel.GraphDispatcher":{__call__:[47,3,1,""],__init__:[47,3,1,""],repeat:[47,3,1,""],shard:[47,3,1,""]},"opennmt.utils.vocab":{Vocab:[48,2,1,""]},"opennmt.utils.vocab.Vocab":{__init__:[48,3,1,""],add:[48,3,1,""],add_from_text:[48,3,1,""],lookup:[48,3,1,""],prune:[48,3,1,""],serialize:[48,3,1,""],size:[48,4,1,""]},opennmt:{config:[7,0,0,"-"],constants:[8,0,0,"-"],decoders:[9,0,0,"-"],encoders:[13,0,0,"-"],inputters:[19,0,0,"-"],layers:[23,0,0,"-"],models:[28,0,0,"-"],tokenizers:[34,0,0,"-"],utils:[37,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute"},terms:{"abstract":22,"byte":45,"case":[11,22,30],"class":[10,11,12,14,15,16,17,18,20,21,22,24,25,26,29,30,31,32,33,36,39,42,43,46,47,48],"default":[1,24,38,48],"export":[20,29,49,50],"final":[11,38],"function":[7,10,20,22,24,26,29,31,38,39,40,41,42,45,46,49],"int":38,"new":[4,34,38,48],"null":2,"return":[7,10,11,15,17,20,22,24,25,26,27,29,31,32,34,36,38,39,40,41,42,44,45,46,47,48,50],"static":[21,26],"true":[11,17,20,22,26,31,39,42,44,46],"void":2,"while":38,EOS:38,For:[1,2,4,20,31,40,51],Ids:38,THE:22,The:[1,2,4,7,10,11,12,14,15,17,18,20,21,22,24,25,26,27,29,30,31,32,33,36,38,39,40,41,42,43,44,45,46,47,48,50,51],Then:[4,40,51],These:38,Yes:2,__call__:[24,25,42,47],__init__:[11,12,14,15,17,18,20,21,22,24,25,30,31,32,33,36,43,47,48],_io:36,_topk_:38,_topk_flag:38,_topk_scor:38,_topk_seq:38,about:[1,2,22,29,38],abs:[10,12,14,17,18,27,33,38,41],accept:[1,2],accordingli:[2,41],accross:[29,40,47],activ:[12,18,20,22,24,33,51],actual:1,adam_with_decai:1,add:[1,11,20,27,31,34,38,39,45,48,51],add_command_line_argu:34,add_dict_to_collect:45,add_from_text:48,add_process_hook:20,add_to_collect:36,added:[0,11,17,20,32,39],addit:[20,22,29,31,36],addition:[11,32],advanc:[2,3,50],aerob:2,after:[11,17,20,31,38,39,46],after_run:43,against:[22,42],aggress:50,align:[2,22,31],aliv:38,all:[2,11,15,20,26,45,49],allow:1,alpha:38,also:[2,20,44,51],altern:11,ani:[22,36],antich:2,api:49,apidoc:0,apo:2,appli:[12,14,18,20,22,24,25,27,33,46],apply_on:25,apt:50,arbitrarili:1,architectur:1,arg:[34,47],argument:[11,17,29,34,39,41,43,47],ark:2,ark_to_record:2,arrai:[22,31,45],arxiv:[10,12,14,17,18,27,33,38,41],assert:24,assert_state_is_compat:24,asset:[36,49],asset_filepath:36,assign:[20,22,40],associ:[22,48],assum:[20,22,25],assumpt:38,asynchron:51,attach:22,attend:[11,27],attent:[1,11,12,18,27,33,39],attention_dropout:[12,18,33],attention_lay:[11,39],attention_mechan:39,attention_mechanism_class:11,attention_wrapp:11,attentionalrnndecod:11,attentionmechan:[11,39],automat:[0,49],avail:[1,49],averag:[30,44],average_checkpoint:4,average_in_tim:44,avg:4,axi:26,base:[10,11,12,14,15,16,17,18,20,21,22,24,25,26,29,30,31,32,33,34,36,38,40,42,43,47,48],baselin:4,basic:11,batch:[26,29,36,38,40,45,47,51],batch_multipli:[29,40],batch_po:38,batch_siz:[26,27,29,38,40],batch_train_dataset:40,batch_typ:[29,40],beam:[10,38],beam_search:[6,37],beam_siz:38,beam_width:[10,11,12],beat:2,becaus:[38,49],been:[2,31],befor:11,before_run:43,begin:43,behavior:[22,50],being:38,between:[47,51],beyond:2,bidirect:17,bidirectionalrnnencod:17,bin:[1,2,4,50,51],bind:50,bioe:31,bleu:[42,50],bleudetokevalu:42,bleuevalu:42,bool:38,boost:50,both:[17,32],bpe:36,bridg:[6,11,23],broadcast:27,bucket:[29,40],bucket_width:[29,40],budget:2,build:[25,27,39,50],build_cel:39,build_future_mask:27,build_sequence_mask:27,build_token:34,build_vocab:50,bureaucraci:2,cach:27,calcul:27,call:[20,42,45,47,50],callabl:[10,11,17,20,24,29,39,40,42,43,47,48],came:2,can:[1,2,4,11,20,29,34,38,40,46,49,50,51],candid:29,capac:2,captur:38,case_insensitive_embed:22,categor:10,cell:[6,11,17,37],cell_class:[11,17,39],chain:47,chang:41,charact:[1,22,36],charactertoken:36,charconvembedd:22,checkpoint:51,checkpoint_path:4,chief:51,chief_host:51,chunk:31,ckpt:4,classifi:30,classnam:46,client:38,cloth:2,cmake:50,code:[0,1],collabor:2,collect:[20,36,45],collection_nam:45,combin:26,combine_head:27,command:[1,34,51],common:[2,17],compat:24,compil:50,complet:38,complex:1,comput:[27,31,38,44,51],compute_batch_indic:38,compute_topk_scores_and_seq:38,concaten:[26,27],concatreduc:[15,17,20,26],config:[1,4,5,6,50],config_path:7,configur:[2,3,4,7,10,21,22,30,31,36,50],configuration_file_or_kei:[36,50],consid:[1,40,50],consist:50,constant:[5,6,10,41],constrain:[29,40],construct:11,constructor:17,contain:[1,20,21,22,26,27,29,30,31,32,36,38,40,49],content:2,context:27,contrib:[11,39,46],contribut:1,control:4,conv_encod:[6,13],convencod:14,conveni:39,converg:10,convert:[2,47],convolut:[1,14,22],coodin:38,coordin:38,copi:[43,47],copybridg:24,correctli:[31,51],correspond:15,could:31,count_lin:45,count_paramet:45,counter:43,countershook:43,cpp:49,creat:[2,20,25,38,48],credit:47,crf:31,crf_decod:31,cross:44,cross_entropy_loss:44,cross_entropy_sequence_loss:44,cuda_visible_devic:51,cumul:[10,44],current:[0,20,31,32,33,38,41,43,51],custom:[2,43,50],daisi:47,data:[1,3,6,10,19,20,21,22,30,31,32,33,37,47,49,50,51],data_fil:[20,21,22],dataset:[20,40],decai:[6,37,46],decay_r:[41,46],decay_step:[41,46],decay_step_dur:46,decay_typ:46,decayed_learning_r:46,decod:[5,6,24,25,32,38,45,51],decode_length:38,decoded_id:38,decoder_zero_st:24,defin:[1,2,7,8,9,11,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,33,34,36,37,41,44],definit:49,delimit:36,deliv:2,densebridg:24,depend:[20,25,45],depth:[2,21,25,26,27],describ:[1,2,10,12,14,17,18,27,33,41,46],design:1,detail:[22,29,51],detok:[42,50],detoken:[36,50],detokenize_stream:36,dev:50,devic:[29,47,51],dict:[32,38,45],dict_:45,dictionari:[7,20,27,29,32,36,45,46,47],differ:38,dimens:[17,22,25,26,27,33,41,44],dir:49,direct:17,directli:10,directori:[4,20,22,42,49,51],disk:[4,48,49],dispatch:47,displai:[2,51],divis:17,divisor:40,doc:0,docker:51,document:[3,51],doe:24,done:20,dot:27,dot_product_attent:27,down:2,drop:[11,12,14,17,18,20,22,27,33,39],drop_and_add:27,dropout:[11,12,14,17,18,20,22,27,33,39],dtype:[10,11,12,20,21,22,25,27,29,32],duplic:[1,2],dure:[4,10,25,49,50,51],dynam:[1,10,25,32],dynamic_decod:[10,11,12],dynamic_decode_and_search:[10,11,12],each:[10,11,15,17,21,22,25,26,27,31,33,36,38,39,40,44,45,47,48,51],easi:38,echo:50,economi:2,ecosystem:51,effici:40,either:47,element:[26,29,45],emb:25,embed:[1,10,11,12,19,20,22,51],embedd:22,embedding_fil:22,embedding_file_kei:22,embedding_file_with_head:22,embedding_s:[22,50],embedding_var:22,empti:[7,42],enabl:51,encod:[1,5,6,11,24,25,30,31,32,36,45],encode_sequ:25,encoder_st:24,end:[1,2,10,32,38,43,49],end_token:[10,11,12],enfr:[4,50],ensur:[47,50],entri:[22,48],entropi:44,environ:[49,50],eos_id:38,equal:38,equival:51,essenti:50,estim:[10,15,20,27,29,39,44,51],etc:[1,31,51],european:2,evalu:[6,10,29,31,37,43,50,51],evaluators_nam:42,everi:[4,15],every_n_sec:43,every_n_step:43,exampl:[1,2,4,20,29,40,49,50,51],execut:[4,15,47],expand:38,expect:[2,21,49],expected_st:24,extent:2,extern:[36,42,49,50],external_evaluation_fn:42,externalevalu:42,extract:30,extract_batch:45,extract_prefixed_kei:45,factor:17,fals:[11,17,20,22,31,39,41,44],fashion:[46,47],feat1:2,featm:2,featur:[29,40],features_fil:[4,29],features_length_fn:40,feder:2,feed:[12,18,27,33],feed_forward:27,fetch:50,ffn_inner_dim:[12,18,33],field:[20,21],file:[0,2,4,7,20,21,22,29,30,31,36,43,45,48,49,50],filenam:[36,43,45,48],fill:[7,48],filter:[14,40],filter_examples_by_length:40,filter_irregular_batch:40,find:50,finish:38,first:[25,38,51],fit:2,flag:[31,38],flag_bioes_tag:31,flatten:21,float32:[20,21,22,25,27,29],follow:[4,21,22,50],format:[22,29],forward:[12,18,20,27,33],found:[22,48],framework:51,freedom:1,frequenc:48,from:[0,1,2,10,11,12,14,18,19,21,22,24,27,29,30,33,38,40,43,45,46,48],full:[10,38],fun:47,fund:2,fused_project:27,futur:27,gather:[20,38],gcc:50,gener:[2,15,20,22,38,45,50],get:[45,50],get_dict_from_collect:45,get_embedding_fn:10,get_length:[20,21,22],get_optimizer_class:46,get_sampling_prob:10,get_serving_input_receiv:20,git:50,given:[20,32,38,50],global_step:[10,41,46],glove:22,gnmt:17,goal:2,gold:31,gold_flag:31,googl:[27,33],googlernnencod:17,gpu:51,gradient:51,graph:[20,22,29,34,40,45,47,49,50,51],graphdispatch:47,graphkei:36,greater:[25,36],greedi:10,group:2,grow:38,grow_al:38,grow_finish:38,gym:2,hand:38,has:[1,2,21,31,38,51],have:[2,20,22,25,32,38,39],head:[2,12,18,27,33],header:22,hello:50,help:2,helper:[26,39,47],here:[38,50],hidden:[12,18,27,33],high:1,home:50,hook:[6,20,37,42],host:51,how:4,html:0,http:[10,12,14,17,18,27,33,38,41],hyperparamet:46,ident:26,identifi:[2,31,48],identity_valu:26,ids:[10,32,38],ids_out:32,ignor:[22,31,41],implement:[1,2,19,27,38,40,43],implemet:38,impos:11,includ:[22,51],incompat:24,incorrectli:31,increas:[4,32,48],independ:51,index:[2,25,38,48,49],infer:[1,3,10,11,12,49,50,51],inform:[24,49,51],inherit:[11,46],init:50,initi:[10,11,12,14,15,17,18,20,21,22,24,25,30,31,32,33,36,43,47,48],initial_id:38,initial_st:[10,11,12],inner:[11,12,17,18,27,33,39],inner_dim:27,input:[1,10,11,12,14,15,16,17,18,19,20,21,22,25,26,27,29,30,31,32,33,36,39,49],input_depth_kei:21,input_fn:29,input_stream:36,inputt:[1,2,5,6,30,31,32,33,50],insensit:[22,30],inspect:49,inspir:38,instanc:[1,17,51],instead:[10,50],instructor:2,int64:21,integ:[11,39],integr:51,interfac:38,introspect:38,invalid:[10,30,42],italian:2,item:38,item_or_tupl:45,iter:[10,22,45],its:[11,15,16,17,26,39,45,48],join:26,joinreduc:[15,26],keep:4,keep_checkpoint_max:4,kei:[1,2,20,21,22,27,30,31,32,36,45],kernel:14,kernel_s:[14,22],keyword:47,kill:2,know:49,known:[10,21],kubernet:51,kwarg:47,label:[22,29,30,31,40,42,44],label_smooth:44,labels_fil:[29,42],labels_length_fn:40,labels_vocabulary_file_kei:[30,31],laid:2,larger:51,last:[11,30],latest:[4,49],layer:[5,6,11,12,14,15,17,18,20,31,33,39],learn:[1,41,46,51],learning_r:[41,46],learning_rate_decay_fn:46,legisl:2,length:[10,15,20,21,22,25,26,27,29,31,32,36,38,39,40,44,47],length_penalti:[10,11,12],level:[1,44],libboost:50,like:[22,38,49,51],line:[1,2,19,22,30,31,34,45,48,51],linear:[10,12,18,24,27],list:[7,11,15,20,21,22,26,29,36,39,40,42,47,48,51],load:[7,36,48],load_config:7,load_model_modul:7,load_pretrained_embed:22,localhost:51,log:[10,20,22,38,42,43,51],log_dir:[20,22],log_prob:[10,38],logdir:51,logic:[19,24],logit:[10,11,38,44],logits_to_cum_log_prob:10,logparameterscounthook:43,look:49,lookup:[20,25,48],loop:51,loss:[6,37,46,51],lower:47,lowercas:22,lstmcell:[11,17,39],luongattent:11,machin:51,made:[1,2],mai:38,main:[1,4,51],maintain:24,make:[0,38,40,46,50,51],make_dataset:[20,21,22],make_posit:25,manag:51,mani:[2,4,46],manual:49,map:40,mark:38,mask:27,master:2,match:[22,31],max:26,max_count:4,max_length:27,max_sequence_length:26,max_siz:48,max_word_length:22,maximum:[10,25,27,29,40,48],maximum_features_length:[29,40],maximum_iter:[10,11,12],maximum_labels_length:[29,40],maximum_length:[25,27],maximum_posit:25,mean:[2,16,22],mean_encod:[6,13],meanencod:16,mechan:11,memori:[10,11,12,27],memory_sequence_length:[10,11,12],merg:[15,17,20,25,26],merge_config:1,meta:22,metadata:[20,21,22,29,36],method:[20,38],metric:31,min_frequ:48,minim:[16,46],minimum:48,minimum_learning_r:46,misc:[6,37],miss:31,mix:[1,20],mixedinputt:[1,20],mkdir:50,modal:1,mode:[10,11,12,14,15,16,17,18,20,21,22,27,29,36,39,44,51],modekei:[10,15,20,27,29,39,44],model:[2,4,5,6,7,20,23,27,36,38,41,43,49,50],model_dir:4,model_fn:29,modul:[1,5,6,9,13,19,23,28,34,37],more:[1,29,42,51],mostli:43,multi:[1,11,12,15,18,20,27,39,42,50,51],multi_head_attent:27,multiattentionalrnndecod:11,multiinputt:20,multipl:[11,15,20,27,40,47,51],multipli:[26,29,40],multiplyreduc:26,must:[10,22,24,26,38,47],my_config:[1,4],name:[2,29,30,31,32,33,36,38,41,42,45,46],nation:2,need:[38,49],neg:31,neither:22,nest:[10,20,26,38],newli:50,newlin:2,newstest2014:4,next:[11,29,38],noam_decai:41,node:49,non:[7,47],none:[7,10,11,12,14,15,16,17,18,20,22,24,25,27,29,30,31,32,36,38,39,40,41,42,43,45,48],nor:22,norm:[27,51],normal:[27,44],note:[49,51],now:50,num_devic:[29,47],num_gpu:51,num_head:[12,18,27,33],num_lay:[11,12,14,17,18,33,39],num_oov_bucket:22,num_output:[22,27],num_parallel_process_cal:29,num_shard:47,num_unit:[11,12,14,17,18,27,33,39],number:[10,11,12,14,17,18,22,27,29,33,38,39,43,45,46,47,48,51],numpi:[22,31,45],object:[10,12,14,15,17,18,20,22,24,25,26,29,33,36,42,47,48],observ:38,occur:42,off:38,offset:26,onc:20,one:[11,20,22,25,30,31,40,42],onli:[0,11,31,32,33,40,50],onmt:50,open:51,opennmt:[0,1,2,3,49,50,51],opennmt_token:[6,34],opennmttoken:50,oper:38,ops:[11,17,38,39],opt:46,optim:[1,6,22,37,40],option:[1,2,4,10,22,25,27,29,40,43,50,51],order:38,org:[10,12,14,17,18,27,33,38,41],organ:40,other:[1,22,49],otherwis:[15,22,25,27,36],out:[4,40],output:[10,11,12,14,15,17,18,22,27,29,30,32,33,36,38,39,42,43,45,47,49],output_dir:[4,42,43],output_fil:43,output_is_attent:11,output_stream:36,outputs_reduc:15,over:[14,51],overrid:11,packag:[0,3,5,50],pad:[20,25,26,38,40],pad_in_tim:26,pad_n_with_ident:26,pad_with_ident:26,padded_batch:20,padded_shap:[20,40],padding_length:26,pair:20,parallel:[6,20,29,37,51],parallelencod:[1,15],parallelinputt:[1,2,20],param:[29,30,31,32,46],paramet:[4,7,10,11,12,14,15,17,18,20,21,22,24,25,26,27,29,30,31,32,33,36,38,39,40,41,42,43,44,45,46,47,48,51],parameter:24,parliament:2,parser:34,part:[1,29,40,47,50],pass:[11,24],past:46,path:[7,22,42,48],pattern:38,pbtxt:22,penal:38,penalti:[10,38],per:[22,30,31],perform:4,period:49,perl:[42,50],permit:38,person:2,pilat:2,pip:0,plugin:50,portal:3,pos:38,posit:[6,12,14,18,23,27,31,33],position_encod:[12,14,18,33],positionembedd:[12,14,18,25,33],positionencod:[12,14,18,25,33],possibl:[7,10,20,26,38],post_evaluation_fn:43,postur:2,pre:27,precis:31,predefin:1,predict:[29,30,31,32,42,43,50],predicted_flag:31,predicted_id:10,predictions_fil:4,predictions_path:42,prefer:1,prefix:[2,32,38,45],prepar:[2,20,29,32,40,50],prerog:2,pretrain:22,previou:27,print:[29,45],print_byt:45,print_predict:[29,30,31,32],prioriti:1,probabl:[10,11,12,14,17,18,20,22,27,33,38,39,44,51],process:[20,22,29,30,31,32,33,38,51],produc:31,product:27,program:2,project:[8,27,45],projector_config:22,provid:[1,3,22,38,49,50],provis:2,prune:48,ps_host:51,purchas:2,purpos:2,py_func:49,pyramidalrnnencod:17,python:[0,1,2,4,7,11,17,36,39,43,48,49,50,51],pythonpath:50,queri:[10,27],quot:2,rais:[10,17,22,24,29,30,32,36,39,40,42,46,47],rank:36,rate:[41,46,51],raw:[19,20],reach:38,read:[10,21,40,45],read_prob:10,realis:2,recal:31,receiv:20,recommonmark:0,record:[2,21,38],record_inputt:[6,19],reduc:[6,15,17,20,23,25],reduce_sequ:26,reduced_input:26,reduced_length:26,reduct:17,reduction_factor:17,refer:[24,50],reflect:32,refus:2,regist:[22,36],rel:[7,22],relat:[1,7,27,42,46],relu:[12,18,33],relu_dropout:[12,18,33],remov:[0,20],remove_data_field:20,renam:0,repeat:47,replac:11,replic:[27,29,40,47],replica:51,repositori:50,repres:38,requir:[10,20,36,38,49,50],reserv:25,residu:27,residual_connect:[11,17,39],resolv:46,respect:26,result:[22,42,51],retain:26,reusabl:[1,23],rightmost:1,rip:2,rnn:[1,11,17,39],rnn_cell_impl:[11,17,39],rnn_decod:[6,9],rnn_encod:[6,13],rnncell:39,rnndecod:11,rnnencod:17,roll_sequ:26,run:[0,4,38,42,47,49,51],run_context:43,run_valu:43,sai:[2,38],same:[15,20,25,26,27,32,39,40,47],sampl:[1,10,29,50,51],sample_buffer_s:29,sampling_prob:[10,11,12],save:[4,17,42,43,48,50],save_checkpoints_step:4,save_vocab:50,saved_model:49,saved_model_cli:49,saveevaluationpredictionhook:[42,43],scale:[2,41],schedul:10,schedule_typ:10,scheme:31,scor:38,score:[27,38,42],scores_to_gath:38,script:[1,2,4,48,49],seach:38,search:[10,38],section:51,see:[1,2,20,50,51],select:[29,34,51],self:[1,12,18,27,33],self_attention_decod:[6,9],self_attention_encod:[6,13],selfattentiondecod:12,selfattentionencod:18,semant:41,senior:2,sentenc:[2,36,38,48],separ:[1,2],seq2seq:[11,32,39],seq:38,seq_length:38,seqclassifi:30,seqtagg:31,sequenc:[10,14,15,17,19,22,25,26,27,29,30,31,32,33,36,38,40,44],sequence_classifi:[6,28],sequence_length:[10,11,12,14,15,16,17,18,22,25,26,27,31,36,44],sequence_tagg:[6,28],sequence_to_sequ:[6,28,33],sequenceclassifi:30,sequencerecordinputt:[2,21],sequencetagg:31,sequencetosequ:[32,33,50],sequenti:[15,38],sequentialencod:[1,15],serial:[2,36,48,49],serv:[3,20,29],server:51,serving_default:49,serving_input_fn:29,servinginputreceiv:[20,29],session:43,session_run_hook:43,sessionrunhook:43,set:[1,2,4,10,20,22,24,25,27,29,36,45,50,51],set_data_field:20,setup:20,sever:[4,15,20,51],shape:[10,15,20,21,22,25,26,27,40],shard:47,share:[33,51],shell:51,shift:[26,32],shift_target_sequ:32,shortcut:25,shoud:38,should:[1,2,32,36,51],show:49,signatur:[20,46],signature_def:49,similar:40,simpl:[11,16,17,20,22,43],simpli:[1,51],simplifi:2,singl:[1,26,45,51],site:2,size:[10,14,22,24,25,27,29,38,40,48,50],sleep:2,smooth:44,soldier:2,some:[1,49],sourc:[1,2,7,10,11,12,14,15,16,17,18,20,21,22,24,25,26,27,29,30,31,32,33,34,36,38,39,40,41,42,43,44,45,46,47,48,51],source_inputt:[32,33,50],source_tokenizer_config:50,source_words_vocabulari:50,space:[2,22,27,36],spacetoken:[22,36],special:48,special_token:48,specif:[20,23],speed:51,sphinx:0,sphinx_rtd_them:0,split:[22,27,29,36,40,47],split_batch:47,split_head:27,src:[2,49],staircas:[41,46],standard:[32,36],start:[10,22,32,38,46,48,51],start_decay_step:46,start_token:[10,11,12],state:[2,10,11,15,17,24,38],states_reduc:15,states_to_gath:38,stdout:[36,45],step:[4,10,11,38,41,42,43,46],stepcounterhook:43,stop:32,store:38,str_as_byt:45,strageti:[29,40],strategi:40,stream:[29,30,31,32,36,45],stretch:2,stride:22,string:[31,34,36,38,45,46,48],structur:[20,26,47],submodul:[5,50],subpackag:5,sudo:50,suffix:[32,43],sum:26,summar:43,summari:51,summary_writ:43,sumreduc:[17,25,26],support:[31,32,33,36,49,51],sybmol:38,symbol:38,symbols_to_logits_fn:38,synchron:51,synergi:2,sys:45,tabl:[20,25],table_initi:20,tag:31,tag_set:49,tagger:31,tagging_schem:31,take:[10,11,16,17,38,39,43],target:[2,10,32,33,40],target_inputt:[32,33,50],target_tokenizer_config:50,target_words_vocabulari:50,task:51,task_index:51,task_typ:51,templat:1,tensor2tensor:47,tensor:[10,20,21,22,25,26,27,32,34,36,38,45,47],tensorboard:[22,51],tensorflow:[11,17,39,43,49,51],term:2,test:[0,50],text:[19,22,36,48,49,50],text_inputt:[6,19,32,33],textinputt:[2,22,50],textiowrapp:36,tfdbg:38,tfrecord:[2,21],tgt:49,than:[25,36,47],thei:[1,2],them:2,thi:[2,3,4,11,20,22,25,30,31,32,33,38,40,42,43,45,46,49,51],thing:38,third_parti:50,thoughout:8,three:38,throughout:45,tile:27,tile_sequence_length:27,time:[17,21,25,26,27,38,44,51],titl:2,toi:[1,2,49],tok:4,token:[2,3,5,6,10,22,29,32,40,44,48,49],tokenize_stream:36,tokenize_text:50,tokenizer_config:50,tokens_to_char:22,tokp_gathered_scor:38,told:2,tool:50,top:38,topk:38,topk_finished_flag:38,topk_gathered_scor:38,topk_seq:38,total:45,train:[1,2,3,4,10,11,12,14,15,16,17,18,20,22,29,40,43,44,46,49,50],train_and_evalu:51,train_features_fil:2,train_source_1:2,train_source_2:2,train_source_3:2,trainabl:[22,43,45],trainer:2,transform:[6,12,18,19,20,21,22,23,24,28,34,40],transform_data:20,tupl:[10,15,26,27,31,38,44,45],two:2,txt:[2,49,50],type:[10,21,22,25,27,38,46,49],typeerror:[10,32],typic:49,ubuntu:50,under:50,unicod:[22,36],unidirectionalrnnencod:17,uniqu:38,unit:[11,12,14,17,18,20,22,27,33,39],unknown:22,unless:2,unscal:44,unsur:1,unused_data:20,updat:[20,32,50,51],url:51,usag:2,use:[0,27,29,36,38,40,45,49,50,51],used:[1,2,4,8,10,17,25,29,31,36,38,42,47,49,50,51],user:[1,20,29,36,51],uses:51,using:[1,2,11,12,17,18,38,49,50],usual:[4,10,20,25],utf:36,util:[5,6],val1:22,val2:22,valid:47,valm:22,valu:[1,8,10,20,21,25,26,27,29,38,44,45,46,48],valueerror:[10,17,22,24,29,30,36,39,40,42,46,47],variabl:[21,22,47,49],variant:22,variou:[37,45],vector:[19,22,27,30],version:[36,48],view:45,visibl:47,visual:[20,22,38,51],visualize_embed:22,vocab:[6,37,38,49,50],vocab_s:[10,11,12,38],vocabulari:[10,22,30,31,48,49,50],vocabulary_fil:22,vocabulary_file_kei:[22,50],vocabulary_s:22,volatil:20,warmup:41,watch:38,weight:[10,49],welcom:1,when:[2,10,17,29,31,38,49],where:[2,10,25,26,27,40,47,48,51],whether:38,which:[2,11,20,21,26,29,38,39,42,43],whose:2,width:[10,29,40],window:22,with_head:22,within:20,word1:22,word2:22,word:[1,10,22,51],wordembedd:[22,32,33,50],wordn:22,work:[1,34],worker:51,worker_host:51,workflow:50,world:50,wrapper:11,write:48,yaml:[1,2,36,50],yml:[1,4,50],you:[1,2,49],your:[2,4,49,50,51],zerobridg:[11,24],zip:26,zip_and_reduc:26},titles:["Documentation","Configuration","Data","Overview","Inference","opennmt","opennmt package","opennmt.config module","opennmt.constants module","opennmt.decoders package","opennmt.decoders.decoder module","opennmt.decoders.rnn_decoder module","opennmt.decoders.self_attention_decoder module","opennmt.encoders package","opennmt.encoders.conv_encoder module","opennmt.encoders.encoder module","opennmt.encoders.mean_encoder module","opennmt.encoders.rnn_encoder module","opennmt.encoders.self_attention_encoder module","opennmt.inputters package","opennmt.inputters.inputter module","opennmt.inputters.record_inputter module","opennmt.inputters.text_inputter module","opennmt.layers package","opennmt.layers.bridge module","opennmt.layers.position module","opennmt.layers.reducer module","opennmt.layers.transformer module","opennmt.models package","opennmt.models.model module","opennmt.models.sequence_classifier module","opennmt.models.sequence_tagger module","opennmt.models.sequence_to_sequence module","opennmt.models.transformer module","opennmt.tokenizers package","opennmt.tokenizers.opennmt_tokenizer module","opennmt.tokenizers.tokenizer module","opennmt.utils package","opennmt.utils.beam_search module","opennmt.utils.cell module","opennmt.utils.data module","opennmt.utils.decay module","opennmt.utils.evaluator module","opennmt.utils.hooks module","opennmt.utils.losses module","opennmt.utils.misc module","opennmt.utils.optim module","opennmt.utils.parallel module","opennmt.utils.vocab module","Serving","Tokenization","Training"],titleterms:{autodoc:0,averag:4,beam_search:38,bridg:24,build:0,cell:39,checkpoint:4,config:7,configur:1,constant:8,conv_encod:14,data:[2,40],decai:41,decod:[9,10,11,12],depend:0,distribut:51,document:0,encod:[13,14,15,16,17,18],evalu:42,file:1,format:2,hook:43,infer:4,input:2,inputt:[19,20,21,22],instal:[0,50],layer:[23,24,25,26,27],local:0,loss:44,mean_encod:16,misc:45,model:[1,28,29,30,31,32,33],modul:[7,8,10,11,12,14,15,16,17,18,20,21,22,24,25,26,27,29,30,31,32,33,35,36,38,39,40,41,42,43,44,45,46,47,48],monitor:51,multipl:1,note:50,opennmt:[5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48],opennmt_token:35,optim:46,overview:3,packag:[6,9,13,19,23,28,34,37],parallel:[2,47],paramet:1,posit:25,record_inputt:21,reduc:26,regist:0,replic:51,rnn_decod:11,rnn_encod:17,self_attention_decod:12,self_attention_encod:18,sequence_classifi:30,sequence_tagg:31,sequence_to_sequ:32,serv:49,sourc:0,submodul:[6,9,13,19,23,28,34,37],subpackag:6,text:2,text_inputt:22,token:[34,35,36,50],train:51,transform:[27,33],usag:50,util:[37,38,39,40,41,42,43,44,45,46,47,48],vector:2,vocab:48}})