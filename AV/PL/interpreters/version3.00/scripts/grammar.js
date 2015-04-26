/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[2,2],$V1=[1,4],$V2=[2,5],$V3=[1,16],$V4=[1,20],$V5=[1,31],$V6=[2,40],$V7=[2,42],$V8=[1,35],$V9=[1,55],$Va=[1,58],$Vb=[1,64],$Vc=[1,65],$Vd=[1,56],$Ve=[1,62],$Vf=[1,63],$Vg=[1,61],$Vh=[1,57],$Vi=[1,66],$Vj=[1,67],$Vk=[1,68],$Vl=[1,60],$Vm=[16,55],$Vn=[9,13,14,16,39,41,43,44,45,49,50,51,52,54,55,56,59,63,64,65,66,67,68,69,70,71,72,74,75,76],$Vo=[1,78],$Vp=[2,58],$Vq=[9,13,39,41,44,45,49,52,56,63,64,65,74],$Vr=[2,60],$Vs=[2,62],$Vt=[1,134];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"decls":4,"PUBLIC":5,"CLASS":6,"DRIVER":7,"EXTENDS":8,"VAR":9,"LBRACE":10,"METHOD":11,"MAIN":12,"LPAREN":13,"RPAREN":14,"block":15,"RBRACE":16,"EOF":17,"class":18,"ivars":19,"methods":20,"PROTECTED":21,"method":22,"formals":23,"exp":24,"var_exp":25,"intlit_exp":26,"fn_exp":27,"app_exp":28,"prim1_app_exp":29,"prim2_app_exp":30,"if_exp":31,"let_exp":32,"print_exp":33,"print2_exp":34,"assign_exp":35,"new_exp":36,"super_call":37,"method_call":38,"NEW":39,"csargs":40,"CALL":41,"SUPER":42,"DOT":43,"INT":44,"PRINT":45,"DQUOTE":46,"optional":47,"COLON":48,"SET":49,"EQ":50,"SEMICOLON":51,"LET":52,"bindings":53,"IN":54,"END":55,"FN":56,"THATRETURNS":57,"moreformals":58,"COMMA":59,"args":60,"prim1_op":61,"prim2_op":62,"ADD1":63,"NEG":64,"NOT":65,"PLUS":66,"MINUS":67,"TIMES":68,"DIV":69,"REM":70,"LT":71,"GT":72,"more_csargs":73,"IF":74,"THEN":75,"ELSE":76,"$accept":0,"$end":1},
terminals_: {2:"error",5:"PUBLIC",6:"CLASS",7:"DRIVER",8:"EXTENDS",9:"VAR",10:"LBRACE",11:"METHOD",12:"MAIN",13:"LPAREN",14:"RPAREN",16:"RBRACE",17:"EOF",21:"PROTECTED",39:"NEW",41:"CALL",42:"SUPER",43:"DOT",44:"INT",45:"PRINT",46:"DQUOTE",48:"COLON",49:"SET",50:"EQ",51:"SEMICOLON",52:"LET",54:"IN",55:"END",56:"FN",57:"THATRETURNS",59:"COMMA",63:"ADD1",64:"NEG",65:"NOT",66:"PLUS",67:"MINUS",68:"TIMES",69:"DIV",70:"REM",71:"LT",72:"GT",74:"IF",75:"THEN",76:"ELSE"},
productions_: [0,[3,16],[4,0],[4,2],[18,8],[19,0],[19,3],[20,1],[20,2],[22,8],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[24,1],[36,5],[37,7],[38,7],[25,1],[26,1],[33,2],[34,5],[47,1],[47,1],[35,4],[15,1],[15,3],[32,5],[53,3],[53,4],[27,6],[23,0],[23,2],[58,0],[58,3],[28,4],[29,4],[30,5],[61,1],[61,1],[61,1],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1],[62,1],[60,0],[60,2],[40,0],[40,2],[73,0],[73,3],[31,6]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
 return SLang.absyn.createProgram($$[$0-15],$$[$0-3]); 
break;
case 2: case 5: case 40: case 58: case 60:
 this.$ = [ ]; 
break;
case 3: case 6: case 8:
 $$[$0].unshift($$[$0-1]);  this.$ = $$[$0]; 
break;
case 4:
 this.$ = SLang.absyn.createClass($$[$0-6],$$[$0-4],$$[$0-2],$$[$0-1]); 
break;
case 7: case 34:
 this.$ = [ $$[$0] ]; 
break;
case 9:
 this.$ = SLang.absyn.createMethod($$[$0-6], $$[$0-4], $$[$0-1]); 
break;
case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 19: case 20: case 21: case 22: case 23: case 32: case 47: case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57:
 this.$ = $$[$0]; 
break;
case 24:
 this.$ = SLang.absyn.createNewExp($$[$0-3],$$[$0-1]); 
break;
case 25:
 this.$ = SLang.absyn.createSuperCall($$[$0-3],$$[$0-1]); 
break;
case 26:
 this.$ = SLang.absyn.createMethodCall($$[$0-5],$$[$0-3],$$[$0-1]); 
break;
case 27:
 this.$ = SLang.absyn.createVarExp( $$[$0] ); 
break;
case 28:
 this.$ = SLang.absyn.createIntExp( $$[$0] ); 
break;
case 29:
 this.$ = SLang.absyn.createPrintExp( $$[$0] ); 
break;
case 30:
 this.$ = SLang.absyn.createPrint2Exp( $$[$0-2], $$[$0] ); 
break;
case 31:
 this.$ = null; 
break;
case 33:
 this.$ = SLang.absyn.createAssignExp( $$[$0-2], $$[$0] ); 
break;
case 35:
 $$[$0].unshift( $$[$0-2] ); this.$ = $$[$0]; 
break;
case 36:
 var args = $$[$0-3][1]; args.unshift( "args" );
             var fnexp = SLang.absyn.createFnExp($$[$0-3][0],$$[$0-1]);
             this.$ = SLang.absyn.createAppExp(fnexp,args);
           
break;
case 37:
 this.$ = [ [ $$[$0-2] ], [ $$[$0] ] ]; 
break;
case 38:
 var vars = $$[$0][0];  vars.unshift($$[$0-3]);
             var vals = $$[$0][1];  vals.unshift($$[$0-1]);
	     this.$ = [ vars, vals ];
           
break;
case 39:
 this.$ = SLang.absyn.createFnExp($$[$0-3],[$$[$0]]); 
break;
case 41: case 59:
 var result;
          if ($$[$0] === [ ])
	     result = [ $$[$0-1] ];
          else {
             $$[$0].unshift($$[$0-1]);
             result = $$[$0];
          }
          this.$ = result;
        
break;
case 42: case 62:
 this.$ = [ ] 
break;
case 43:
 $$[$0].unshift($$[$0-1]); 
         this.$ = $$[$0]; 
break;
case 44:
  $$[$0-1].unshift("args");
          this.$ = SLang.absyn.createAppExp($$[$0-2],$$[$0-1]); 
break;
case 45:
 this.$ = SLang.absyn.createPrim1AppExp($$[$0-3],$$[$0-1]); 
break;
case 46:
 this.$ = SLang.absyn.createPrim2AppExp($$[$0-2],$$[$0-3],$$[$0-1]); 
break;
case 61: case 63:
 $$[$0].unshift($$[$0-1]); this.$ = $$[$0]; 
break;
case 64:
 this.$ = SLang.absyn.createIfExp($$[$0-4],$$[$0-2],$$[$0]); 
break;
}
},
table: [{3:1,4:2,5:$V0,6:$V1,18:3},{1:[3]},{5:[1,5]},{4:6,5:$V0,6:$V1,18:3},{9:[1,7]},{6:[1,8]},{5:[2,3]},{8:[1,9]},{7:[1,10]},{9:[1,11]},{8:[1,12]},{10:[1,13]},{9:[1,14]},{11:$V2,19:15,21:$V3},{10:[1,17]},{11:$V4,20:18,22:19},{9:[1,21]},{11:[1,22]},{16:[1,23]},{11:$V4,16:[2,7],20:24,22:19},{9:[1,25]},{11:$V2,19:26,21:$V3},{12:[1,27]},o([5,6],[2,4]),{16:[2,8]},{13:[1,28]},{11:[2,6]},{13:[1,29]},{9:$V5,14:$V6,23:30},{14:[1,32]},{14:[1,33]},{14:$V7,58:34,59:$V8},{10:[1,36]},{10:[1,37]},{14:[2,41]},{9:[1,38]},{9:$V9,13:$Va,15:39,24:40,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$V9,13:$Va,15:69,24:40,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{14:$V7,58:70,59:$V8},{16:[1,71]},o($Vm,[2,34],{51:[1,72]}),o($Vn,[2,10]),o($Vn,[2,11]),o($Vn,[2,12]),o($Vn,[2,13]),o($Vn,[2,14]),o($Vn,[2,15]),o($Vn,[2,16]),o($Vn,[2,17]),o($Vn,[2,18]),o($Vn,[2,19]),o($Vn,[2,20]),o($Vn,[2,21]),o($Vn,[2,22]),o($Vn,[2,23]),o($Vn,[2,27]),o($Vn,[2,28]),{13:[1,73]},{9:$V9,13:$Va,24:74,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{13:[1,75]},{9:$V9,13:$Va,24:76,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$Vo,53:77},{9:$V9,13:$Va,24:79,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,46:[1,80],49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:[1,81]},{9:[1,82]},{9:$V9,13:$Va,24:84,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,42:[1,83],44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{13:[2,47]},{13:[2,48]},{13:[2,49]},{16:[1,85]},{14:[2,43]},{16:[1,86]},{9:$V9,13:$Va,15:87,24:40,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$V5,14:$V6,23:88},{9:$V9,13:$Va,14:$Vp,24:91,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,50:[1,99],52:$Vg,56:$Vh,60:89,61:59,62:90,63:$Vi,64:$Vj,65:$Vk,66:[1,92],67:[1,93],68:[1,94],69:[1,95],70:[1,96],71:[1,97],72:[1,98],74:$Vl},{9:$V9,13:$Va,24:100,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{75:[1,101]},{54:[1,102]},{50:[1,103]},o($Vn,[2,29]),{9:[1,104]},{50:[1,105]},{13:[1,106]},{43:[1,107]},{43:[1,108]},o([11,16],[2,9]),{17:[1,109]},o($Vm,[2,35]),{14:[1,110]},{14:[1,111]},{9:$V9,13:$Va,24:112,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$V9,13:$Va,14:$Vp,24:91,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,60:113,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},o($Vq,[2,50]),o($Vq,[2,51]),o($Vq,[2,52]),o($Vq,[2,53]),o($Vq,[2,54]),o($Vq,[2,55]),o($Vq,[2,56]),o($Vq,[2,57]),{14:[1,114]},{9:$V9,13:$Va,24:115,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$V9,13:$Va,15:116,24:40,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$V9,13:$Va,24:117,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{46:[1,118]},{9:$V9,13:$Va,24:119,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$V9,13:$Va,14:$Vr,24:121,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,40:120,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:[1,122]},{9:[1,123]},{1:[2,1]},{57:[1,124]},o($Vn,[2,44]),{14:[1,125]},{14:[2,59]},o($Vn,[2,45]),{76:[1,126]},{55:[1,127]},{9:$Vo,53:128,54:[2,37]},{9:$V9,13:$Va,24:131,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,47:129,48:[1,130],49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},o($Vn,[2,33]),{14:[1,132]},{14:$Vs,59:$Vt,73:133},{13:[1,135]},{13:[1,136]},{9:$V9,13:$Va,24:137,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},o($Vn,[2,46]),{9:$V9,13:$Va,24:138,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},o($Vn,[2,36]),{54:[2,38]},o($Vn,[2,30]),o($Vn,[2,31]),o($Vn,[2,32]),o($Vn,[2,24]),{14:[2,61]},{9:$V9,13:$Va,24:139,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$V9,13:$Va,14:$Vr,24:121,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,40:140,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},{9:$V9,13:$Va,14:$Vr,24:121,25:41,26:42,27:43,28:44,29:45,30:46,31:47,32:48,33:49,34:50,35:51,36:52,37:53,38:54,39:$Vb,40:141,41:$Vc,44:$Vd,45:$Ve,49:$Vf,52:$Vg,56:$Vh,61:59,63:$Vi,64:$Vj,65:$Vk,74:$Vl},o($Vn,[2,39]),o($Vn,[2,64]),{14:$Vs,59:$Vt,73:142},{14:[1,143]},{14:[1,144]},{14:[2,63]},o($Vn,[2,25]),o($Vn,[2,26])],
defaultActions: {6:[2,3],24:[2,8],26:[2,6],34:[2,41],66:[2,47],67:[2,48],68:[2,49],70:[2,43],109:[2,1],113:[2,59],128:[2,38],133:[2,61],142:[2,63]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};


/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0: /* skip whitespace */ 
break;
case 1: return 56; 
break;
case 2: return 13; 
break;
case 3: return 14; 
break;
case 4: return 66; 
break;
case 5: return 68; 
break;
case 6: return 69; 
break;
case 7: return 70; 
break;
case 8: return 67; 
break;
case 9: return 71; 
break;
case 10: return 72; 
break;
case 11: return 50; 
break;
case 12: return 64; 
break;
case 13: return 65; 
break;
case 14: return 63; 
break;
case 15: return 52; 
break;
case 16: return 54; 
break;
case 17: return 55; 
break;
case 18: return 45; 
break;
case 19: return 49; 
break;
case 20: return 51; 
break;
case 21: return 48; 
break;
case 22: return 46; 
break;
case 23: return 59; 
break;
case 24: return 57; 
break;
case 25: return 74; 
break;
case 26: return 75; 
break;
case 27: return 76; 
break;
case 28: return 50; 
break;
case 29: return 10; 
break;
case 30: return 16; 
break;
case 31: return 5; 
break;
case 32: return 6; 
break;
case 33: return 8; 
break;
case 34: return 11; 
break;
case 35: return 12; 
break;
case 36: return 21; 
break;
case 37: return 7; 
break;
case 38: return 39; 
break;
case 39: return 43; 
break;
case 40: return 'THIS'; 
break;
case 41: return 42; 
break;
case 42: return 41; 
break;
case 43: return 17; 
break;
case 44: return 9; 
break;
case 45: return 44; 
break;
case 46: return 'INVALID'; 
break;
}
},
rules: [/^(?:\s+)/,/^(?:fn\b)/,/^(?:\()/,/^(?:\))/,/^(?:\+)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:<)/,/^(?:>)/,/^(?:===)/,/^(?:~)/,/^(?:not\b)/,/^(?:add1\b)/,/^(?:let\b)/,/^(?:in\b)/,/^(?:end\b)/,/^(?:print\b)/,/^(?:set\b)/,/^(?:;)/,/^(?::)/,/^(?:")/,/^(?:,)/,/^(?:=>)/,/^(?:if\b)/,/^(?:then\b)/,/^(?:else\b)/,/^(?:=)/,/^(?:\{)/,/^(?:\})/,/^(?:public\b)/,/^(?:class\b)/,/^(?:extends\b)/,/^(?:method\b)/,/^(?:main\b)/,/^(?:protected\b)/,/^(?:Driver\b)/,/^(?:new\b)/,/^(?:\.)/,/^(?:this\b)/,/^(?:super\b)/,/^(?:call\b)/,/^(?:$)/,/^(?:([a-zA-Z])(([a-zA-Z])|([0-9])|_)*)/,/^(?:([0-9])+)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}