

        <!–.浮动小人–>
        <script type=“text/javascript”>
        <?php if(is_home()) echo ‘var isindex=true;var title=””;’;else echo ‘var isindex=false;var title=”‘, get_the_title(),‘”;’; ?>
        <?php if((($display_name = wp_get_current_user()->display_name) != null)) echo ‘var visitor=”‘,$display_name,‘”;’; else if(isset($_COOKIE[‘comment_author_’.COOKIEHASH])) echo ‘var visitor=”‘,$_COOKIE[‘comment_author_’.COOKIEHASH],‘”;’;else echo ‘var visitor=”游客”;’;echo “\n”; ?>
        </script>
        <script type=“text/javascript” src=“http://www.bigbai.fun/xiaoren/spig.js”></script>
        <style>
        .spig
        {
        display:block;
        width:200px;
        height:300px;
        position:absolute;
        bottom: 300px;left:160px;z–index:9999;
        }
        #message
        {
        color :#191919;border: 1px solid #c4c4c4;background:#ddd;
        –moz–border–radius:5px;
        –webkit–border–radius:5px;
        border–radius:5px;
        min–height:1em;
        padding:5px;
        top:-45px;
        position:absolute;
        text–align:center;
        width:auto !important;z–index:10000;
        –moz–box–shadow:0 0 15px #eeeeee;
        –webkit–box–shadow:0 0 15px #eeeeee;
        border–color:#eeeeee;
        box–shadow:0 0 15px #eeeeee;
        outline:none;
        }
        .mumu
        {
        width:200px;
        height:300px;
        cursor: move;
        background:url(http://www.qianxixian.cn/xiaoren/spig.png) no-repeat;
        }
        </style>
        <div id=“spig” class=“spig”>
        <div id=“message”>加载中……</div>
        <div id=“mumu” class=“mumu”></div>
        </div>
        <!–.end浮动小人–>

