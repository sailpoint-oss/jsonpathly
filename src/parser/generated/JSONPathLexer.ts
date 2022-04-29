// Generated from ./src/parser/generated/JSONPath.g4 by ANTLR 4.9.0-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

export class JSONPathLexer extends Lexer {
  public static readonly CURRENT_VALUE = 1;
  public static readonly DOTDOT = 2;
  public static readonly ROOT_VALUE = 3;
  public static readonly DOT = 4;
  public static readonly STAR = 5;
  public static readonly AND = 6;
  public static readonly EQ = 7;
  public static readonly GE = 8;
  public static readonly GT = 9;
  public static readonly LE = 10;
  public static readonly LT = 11;
  public static readonly NE = 12;
  public static readonly REG = 13;
  public static readonly IN = 14;
  public static readonly NIN = 15;
  public static readonly SUB = 16;
  public static readonly ANY = 17;
  public static readonly NON = 18;
  public static readonly SIZO = 19;
  public static readonly SIZ = 20;
  public static readonly EMPT = 21;
  public static readonly NOT = 22;
  public static readonly OR = 23;
  public static readonly TRUE = 24;
  public static readonly FALSE = 25;
  public static readonly NULL = 26;
  public static readonly BRACE_LEFT = 27;
  public static readonly BRACE_RIGHT = 28;
  public static readonly BRACKET_LEFT = 29;
  public static readonly BRACKET_RIGHT = 30;
  public static readonly COLON = 31;
  public static readonly COMMA = 32;
  public static readonly PAREN_LEFT = 33;
  public static readonly PAREN_RIGHT = 34;
  public static readonly QUESTION = 35;
  public static readonly MINUS_SP = 36;
  public static readonly PLUS = 37;
  public static readonly DIV = 38;
  public static readonly REGEX_OPT = 39;
  public static readonly REGEX_EXPR = 40;
  public static readonly FN_MIN = 41;
  public static readonly FN_MAX = 42;
  public static readonly FN_AVG = 43;
  public static readonly FN_STD = 44;
  public static readonly FN_LEN = 45;
  public static readonly FN_SUM = 46;
  public static readonly FN_KEY = 47;
  public static readonly FN_CONC = 48;
  public static readonly FN_APPE = 49;
  public static readonly IDENTIFIER = 50;
  public static readonly STRING = 51;
  public static readonly NUMBER = 52;
  public static readonly WS = 53;

  // tslint:disable:no-trailing-whitespace
  public static readonly channelNames: string[] = ['DEFAULT_TOKEN_CHANNEL', 'HIDDEN'];

  // tslint:disable:no-trailing-whitespace
  public static readonly modeNames: string[] = ['DEFAULT_MODE'];

  public static readonly ruleNames: string[] = [
    'CURRENT_VALUE',
    'DOTDOT',
    'ROOT_VALUE',
    'DOT',
    'STAR',
    'AND',
    'EQ',
    'GE',
    'GT',
    'LE',
    'LT',
    'NE',
    'REG',
    'IN',
    'NIN',
    'SUB',
    'ANY',
    'NON',
    'SIZO',
    'SIZ',
    'EMPT',
    'NOT',
    'OR',
    'TRUE',
    'FALSE',
    'NULL',
    'BRACE_LEFT',
    'BRACE_RIGHT',
    'BRACKET_LEFT',
    'BRACKET_RIGHT',
    'COLON',
    'COMMA',
    'PAREN_LEFT',
    'PAREN_RIGHT',
    'QUESTION',
    'MINUS_SP',
    'PLUS',
    'DIV',
    'REGEX_OPT',
    'REGEX_EXPR',
    'FN_MIN',
    'FN_MAX',
    'FN_AVG',
    'FN_STD',
    'FN_LEN',
    'FN_SUM',
    'FN_KEY',
    'FN_CONC',
    'FN_APPE',
    'IDENTIFIER',
    'STRING',
    'ESC_SINGLE',
    'ESC_DOUBLE',
    'UNICODE',
    'HEX',
    'SAFECODEPOINT_SINGLE',
    'SAFECODEPOINT_DOUBLE',
    'NUMBER',
    'INT',
    'EXP',
    'WS',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'@'",
    "'..'",
    "'$'",
    "'.'",
    "'*'",
    "'&&'",
    "'=='",
    "'>='",
    "'>'",
    "'<='",
    "'<'",
    "'!='",
    "'=~'",
    "' in '",
    "' nin '",
    "' subsetof '",
    "' anyof '",
    "' noneof '",
    "' sizeof '",
    "' size '",
    "' empty'",
    "'!'",
    "'||'",
    "'true'",
    "'false'",
    "'null'",
    "'{'",
    "'}'",
    "'['",
    "']'",
    "':'",
    "','",
    "'('",
    "')'",
    "'?'",
    "'- '",
    "'+'",
    "'/'",
    undefined,
    undefined,
    "'min()'",
    "'max()'",
    "'avg()'",
    "'stddev()'",
    "'length()'",
    "'sum()'",
    "'keys()'",
    "'concat('",
    "'append('",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'CURRENT_VALUE',
    'DOTDOT',
    'ROOT_VALUE',
    'DOT',
    'STAR',
    'AND',
    'EQ',
    'GE',
    'GT',
    'LE',
    'LT',
    'NE',
    'REG',
    'IN',
    'NIN',
    'SUB',
    'ANY',
    'NON',
    'SIZO',
    'SIZ',
    'EMPT',
    'NOT',
    'OR',
    'TRUE',
    'FALSE',
    'NULL',
    'BRACE_LEFT',
    'BRACE_RIGHT',
    'BRACKET_LEFT',
    'BRACKET_RIGHT',
    'COLON',
    'COMMA',
    'PAREN_LEFT',
    'PAREN_RIGHT',
    'QUESTION',
    'MINUS_SP',
    'PLUS',
    'DIV',
    'REGEX_OPT',
    'REGEX_EXPR',
    'FN_MIN',
    'FN_MAX',
    'FN_AVG',
    'FN_STD',
    'FN_LEN',
    'FN_SUM',
    'FN_KEY',
    'FN_CONC',
    'FN_APPE',
    'IDENTIFIER',
    'STRING',
    'NUMBER',
    'WS',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    JSONPathLexer._LITERAL_NAMES,
    JSONPathLexer._SYMBOLIC_NAMES,
    [],
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return JSONPathLexer.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  constructor(input: CharStream) {
    super(input);
    this._interp = new LexerATNSimulator(JSONPathLexer._ATN, this);
  }

  // @Override
  public get grammarFileName(): string {
    return 'JSONPath.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return JSONPathLexer.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return JSONPathLexer._serializedATN;
  }

  // @Override
  public get channelNames(): string[] {
    return JSONPathLexer.channelNames;
  }

  // @Override
  public get modeNames(): string[] {
    return JSONPathLexer.modeNames;
  }

  public static readonly _serializedATN: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x027\u01B1\b\x01' +
    '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
    '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
    '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
    '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
    '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
    '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
    "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04" +
    '+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
    '4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03' +
    '\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b' +
    '\x03\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\r\x03' +
    '\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F' +
    '\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11' +
    '\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12' +
    '\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13' +
    '\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14' +
    '\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15' +
    '\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16' +
    '\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19' +
    '\x03\x19\x03\x19\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A' +
    '\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D' +
    '\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03"\x03' +
    "\"\x03#\x03#\x03$\x03$\x03%\x03%\x03%\x03&\x03&\x03'\x03'\x03(\x07(" +
    '\u010C\n(\f(\x0E(\u010F\v(\x03)\x03)\x07)\u0113\n)\f)\x0E)\u0116\v)\x03' +
    ')\x03)\x03*\x03*\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03+\x03+\x03+\x03' +
    ',\x03,\x03,\x03,\x03,\x03,\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03-\x03' +
    '-\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03.\x03/\x03/\x03/\x03/\x03' +
    '/\x03/\x030\x030\x030\x030\x030\x030\x030\x031\x031\x031\x031\x031\x03' +
    '1\x031\x031\x032\x032\x032\x032\x032\x032\x032\x032\x033\x033\x073\u015D' +
    '\n3\f3\x0E3\u0160\v3\x034\x034\x034\x074\u0165\n4\f4\x0E4\u0168\v4\x03' +
    '4\x034\x034\x034\x074\u016E\n4\f4\x0E4\u0171\v4\x034\x054\u0174\n4\x03' +
    '5\x035\x035\x055\u0179\n5\x036\x036\x036\x056\u017E\n6\x037\x037\x037' +
    '\x037\x037\x037\x038\x038\x039\x039\x03:\x03:\x03;\x05;\u018D\n;\x03;' +
    '\x03;\x03;\x06;\u0192\n;\r;\x0E;\u0193\x05;\u0196\n;\x03;\x05;\u0199\n' +
    ';\x03<\x03<\x03<\x07<\u019E\n<\f<\x0E<\u01A1\v<\x05<\u01A3\n<\x03=\x03' +
    '=\x05=\u01A7\n=\x03=\x03=\x03>\x06>\u01AC\n>\r>\x0E>\u01AD\x03>\x03>\x03' +
    '\u0114\x02\x02?\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07' +
    '\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E' +
    "\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14'\x02" +
    '\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02\x1C7\x02' +
    '\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02"C\x02#E\x02$G\x02%I\x02&K\x02' +
    "'M\x02(O\x02)Q\x02*S\x02+U\x02,W\x02-Y\x02.[\x02/]\x020_\x021a\x022c" +
    '\x023e\x024g\x025i\x02\x02k\x02\x02m\x02\x02o\x02\x02q\x02\x02s\x02\x02' +
    'u\x026w\x02\x02y\x02\x02{\x027\x03\x02\x0F\b\x02iikkoouuww{{\x05\x02C' +
    '\\aac|\x06\x022;C\\aac|\n\x02))11^^ddhhppttvv\n\x02$$11^^ddhhppttvv\x05' +
    '\x022;CHch\x05\x02\x02!))^^\x05\x02\x02!$$^^\x03\x022;\x03\x023;\x04\x02' +
    'GGgg\x04\x02--//\x05\x02\v\f\x0F\x0F""\x02\u01BA\x02\x03\x03\x02\x02' +
    '\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02' +
    '\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02' +
    '\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02' +
    '\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02' +
    '\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02' +
    "\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02'\x03\x02\x02\x02\x02)" +
    '\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02' +
    '\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02' +
    '\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03' +
    '\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02' +
    '\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02' +
    'K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02' +
    '\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02' +
    '\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03' +
    '\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02' +
    '\x02\x02g\x03\x02\x02\x02\x02u\x03\x02\x02\x02\x02{\x03\x02\x02\x02\x03' +
    '}\x03\x02\x02\x02\x05\x7F\x03\x02\x02\x02\x07\x82\x03\x02\x02\x02\t\x84' +
    '\x03\x02\x02\x02\v\x86\x03\x02\x02\x02\r\x88\x03\x02\x02\x02\x0F\x8B\x03' +
    '\x02\x02\x02\x11\x8E\x03\x02\x02\x02\x13\x91\x03\x02\x02\x02\x15\x93\x03' +
    '\x02\x02\x02\x17\x96\x03\x02\x02\x02\x19\x98\x03\x02\x02\x02\x1B\x9B\x03' +
    '\x02\x02\x02\x1D\x9E\x03\x02\x02\x02\x1F\xA3\x03\x02\x02\x02!\xA9\x03' +
    "\x02\x02\x02#\xB4\x03\x02\x02\x02%\xBC\x03\x02\x02\x02'\xC5\x03\x02\x02" +
    '\x02)\xCE\x03\x02\x02\x02+\xD5\x03\x02\x02\x02-\xDC\x03\x02\x02\x02/\xDE' +
    '\x03\x02\x02\x021\xE1\x03\x02\x02\x023\xE6\x03\x02\x02\x025\xEC\x03\x02' +
    '\x02\x027\xF1\x03\x02\x02\x029\xF3\x03\x02\x02\x02;\xF5\x03\x02\x02\x02' +
    '=\xF7\x03\x02\x02\x02?\xF9\x03\x02\x02\x02A\xFB\x03\x02\x02\x02C\xFD\x03' +
    '\x02\x02\x02E\xFF\x03\x02\x02\x02G\u0101\x03\x02\x02\x02I\u0103\x03\x02' +
    '\x02\x02K\u0106\x03\x02\x02\x02M\u0108\x03\x02\x02\x02O\u010D\x03\x02' +
    '\x02\x02Q\u0110\x03\x02\x02\x02S\u0119\x03\x02\x02\x02U\u011F\x03\x02' +
    '\x02\x02W\u0125\x03\x02\x02\x02Y\u012B\x03\x02\x02\x02[\u0134\x03\x02' +
    '\x02\x02]\u013D\x03\x02\x02\x02_\u0143\x03\x02\x02\x02a\u014A\x03\x02' +
    '\x02\x02c\u0152\x03\x02\x02\x02e\u015A\x03\x02\x02\x02g\u0173\x03\x02' +
    '\x02\x02i\u0175\x03\x02\x02\x02k\u017A\x03\x02\x02\x02m\u017F\x03\x02' +
    '\x02\x02o\u0185\x03\x02\x02\x02q\u0187\x03\x02\x02\x02s\u0189\x03\x02' +
    '\x02\x02u\u018C\x03\x02\x02\x02w\u01A2\x03\x02\x02\x02y\u01A4\x03\x02' +
    '\x02\x02{\u01AB\x03\x02\x02\x02}~\x07B\x02\x02~\x04\x03\x02\x02\x02\x7F' +
    '\x80\x070\x02\x02\x80\x81\x070\x02\x02\x81\x06\x03\x02\x02\x02\x82\x83' +
    '\x07&\x02\x02\x83\b\x03\x02\x02\x02\x84\x85\x070\x02\x02\x85\n\x03\x02' +
    '\x02\x02\x86\x87\x07,\x02\x02\x87\f\x03\x02\x02\x02\x88\x89\x07(\x02\x02' +
    '\x89\x8A\x07(\x02\x02\x8A\x0E\x03\x02\x02\x02\x8B\x8C\x07?\x02\x02\x8C' +
    '\x8D\x07?\x02\x02\x8D\x10\x03\x02\x02\x02\x8E\x8F\x07@\x02\x02\x8F\x90' +
    '\x07?\x02\x02\x90\x12\x03\x02\x02\x02\x91\x92\x07@\x02\x02\x92\x14\x03' +
    '\x02\x02\x02\x93\x94\x07>\x02\x02\x94\x95\x07?\x02\x02\x95\x16\x03\x02' +
    '\x02\x02\x96\x97\x07>\x02\x02\x97\x18\x03\x02\x02\x02\x98\x99\x07#\x02' +
    '\x02\x99\x9A\x07?\x02\x02\x9A\x1A\x03\x02\x02\x02\x9B\x9C\x07?\x02\x02' +
    '\x9C\x9D\x07\x80\x02\x02\x9D\x1C\x03\x02\x02\x02\x9E\x9F\x07"\x02\x02' +
    '\x9F\xA0\x07k\x02\x02\xA0\xA1\x07p\x02\x02\xA1\xA2\x07"\x02\x02\xA2\x1E' +
    '\x03\x02\x02\x02\xA3\xA4\x07"\x02\x02\xA4\xA5\x07p\x02\x02\xA5\xA6\x07' +
    'k\x02\x02\xA6\xA7\x07p\x02\x02\xA7\xA8\x07"\x02\x02\xA8 \x03\x02\x02' +
    '\x02\xA9\xAA\x07"\x02\x02\xAA\xAB\x07u\x02\x02\xAB\xAC\x07w\x02\x02\xAC' +
    '\xAD\x07d\x02\x02\xAD\xAE\x07u\x02\x02\xAE\xAF\x07g\x02\x02\xAF\xB0\x07' +
    'v\x02\x02\xB0\xB1\x07q\x02\x02\xB1\xB2\x07h\x02\x02\xB2\xB3\x07"\x02' +
    '\x02\xB3"\x03\x02\x02\x02\xB4\xB5\x07"\x02\x02\xB5\xB6\x07c\x02\x02' +
    '\xB6\xB7\x07p\x02\x02\xB7\xB8\x07{\x02\x02\xB8\xB9\x07q\x02\x02\xB9\xBA' +
    '\x07h\x02\x02\xBA\xBB\x07"\x02\x02\xBB$\x03\x02\x02\x02\xBC\xBD\x07"' +
    '\x02\x02\xBD\xBE\x07p\x02\x02\xBE\xBF\x07q\x02\x02\xBF\xC0\x07p\x02\x02' +
    '\xC0\xC1\x07g\x02\x02\xC1\xC2\x07q\x02\x02\xC2\xC3\x07h\x02\x02\xC3\xC4' +
    '\x07"\x02\x02\xC4&\x03\x02\x02\x02\xC5\xC6\x07"\x02\x02\xC6\xC7\x07' +
    'u\x02\x02\xC7\xC8\x07k\x02\x02\xC8\xC9\x07|\x02\x02\xC9\xCA\x07g\x02\x02' +
    '\xCA\xCB\x07q\x02\x02\xCB\xCC\x07h\x02\x02\xCC\xCD\x07"\x02\x02\xCD(' +
    '\x03\x02\x02\x02\xCE\xCF\x07"\x02\x02\xCF\xD0\x07u\x02\x02\xD0\xD1\x07' +
    'k\x02\x02\xD1\xD2\x07|\x02\x02\xD2\xD3\x07g\x02\x02\xD3\xD4\x07"\x02' +
    '\x02\xD4*\x03\x02\x02\x02\xD5\xD6\x07"\x02\x02\xD6\xD7\x07g\x02\x02\xD7' +
    '\xD8\x07o\x02\x02\xD8\xD9\x07r\x02\x02\xD9\xDA\x07v\x02\x02\xDA\xDB\x07' +
    '{\x02\x02\xDB,\x03\x02\x02\x02\xDC\xDD\x07#\x02\x02\xDD.\x03\x02\x02\x02' +
    '\xDE\xDF\x07~\x02\x02\xDF\xE0\x07~\x02\x02\xE00\x03\x02\x02\x02\xE1\xE2' +
    '\x07v\x02\x02\xE2\xE3\x07t\x02\x02\xE3\xE4\x07w\x02\x02\xE4\xE5\x07g\x02' +
    '\x02\xE52\x03\x02\x02\x02\xE6\xE7\x07h\x02\x02\xE7\xE8\x07c\x02\x02\xE8' +
    '\xE9\x07n\x02\x02\xE9\xEA\x07u\x02\x02\xEA\xEB\x07g\x02\x02\xEB4\x03\x02' +
    '\x02\x02\xEC\xED\x07p\x02\x02\xED\xEE\x07w\x02\x02\xEE\xEF\x07n\x02\x02' +
    '\xEF\xF0\x07n\x02\x02\xF06\x03\x02\x02\x02\xF1\xF2\x07}\x02\x02\xF28\x03' +
    '\x02\x02\x02\xF3\xF4\x07\x7F\x02\x02\xF4:\x03\x02\x02\x02\xF5\xF6\x07' +
    ']\x02\x02\xF6<\x03\x02\x02\x02\xF7\xF8\x07_\x02\x02\xF8>\x03\x02\x02\x02' +
    '\xF9\xFA\x07<\x02\x02\xFA@\x03\x02\x02\x02\xFB\xFC\x07.\x02\x02\xFCB\x03' +
    '\x02\x02\x02\xFD\xFE\x07*\x02\x02\xFED\x03\x02\x02\x02\xFF\u0100\x07+' +
    '\x02\x02\u0100F\x03\x02\x02\x02\u0101\u0102\x07A\x02\x02\u0102H\x03\x02' +
    '\x02\x02\u0103\u0104\x07/\x02\x02\u0104\u0105\x07"\x02\x02\u0105J\x03' +
    '\x02\x02\x02\u0106\u0107\x07-\x02\x02\u0107L\x03\x02\x02\x02\u0108\u0109' +
    '\x071\x02\x02\u0109N\x03\x02\x02\x02\u010A\u010C\t\x02\x02\x02\u010B\u010A' +
    '\x03\x02\x02\x02\u010C\u010F\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02' +
    '\u010D\u010E\x03\x02\x02\x02\u010EP\x03\x02\x02\x02\u010F\u010D\x03\x02' +
    '\x02\x02\u0110\u0114\x071\x02\x02\u0111\u0113\v\x02\x02\x02\u0112\u0111' +
    '\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02' +
    '\u0114\u0112\x03\x02\x02\x02\u0115\u0117\x03\x02\x02\x02\u0116\u0114\x03' +
    '\x02\x02\x02\u0117\u0118\x071\x02\x02\u0118R\x03\x02\x02\x02\u0119\u011A' +
    '\x07o\x02\x02\u011A\u011B\x07k\x02\x02\u011B\u011C\x07p\x02\x02\u011C' +
    '\u011D\x07*\x02\x02\u011D\u011E\x07+\x02\x02\u011ET\x03\x02\x02\x02\u011F' +
    '\u0120\x07o\x02\x02\u0120\u0121\x07c\x02\x02\u0121\u0122\x07z\x02\x02' +
    '\u0122\u0123\x07*\x02\x02\u0123\u0124\x07+\x02\x02\u0124V\x03\x02\x02' +
    '\x02\u0125\u0126\x07c\x02\x02\u0126\u0127\x07x\x02\x02\u0127\u0128\x07' +
    'i\x02\x02\u0128\u0129\x07*\x02\x02\u0129\u012A\x07+\x02\x02\u012AX\x03' +
    '\x02\x02\x02\u012B\u012C\x07u\x02\x02\u012C\u012D\x07v\x02\x02\u012D\u012E' +
    '\x07f\x02\x02\u012E\u012F\x07f\x02\x02\u012F\u0130\x07g\x02\x02\u0130' +
    '\u0131\x07x\x02\x02\u0131\u0132\x07*\x02\x02\u0132\u0133\x07+\x02\x02' +
    '\u0133Z\x03\x02\x02\x02\u0134\u0135\x07n\x02\x02\u0135\u0136\x07g\x02' +
    '\x02\u0136\u0137\x07p\x02\x02\u0137\u0138\x07i\x02\x02\u0138\u0139\x07' +
    'v\x02\x02\u0139\u013A\x07j\x02\x02\u013A\u013B\x07*\x02\x02\u013B\u013C' +
    '\x07+\x02\x02\u013C\\\x03\x02\x02\x02\u013D\u013E\x07u\x02\x02\u013E\u013F' +
    '\x07w\x02\x02\u013F\u0140\x07o\x02\x02\u0140\u0141\x07*\x02\x02\u0141' +
    '\u0142\x07+\x02\x02\u0142^\x03\x02\x02\x02\u0143\u0144\x07m\x02\x02\u0144' +
    '\u0145\x07g\x02\x02\u0145\u0146\x07{\x02\x02\u0146\u0147\x07u\x02\x02' +
    '\u0147\u0148\x07*\x02\x02\u0148\u0149\x07+\x02\x02\u0149`\x03\x02\x02' +
    '\x02\u014A\u014B\x07e\x02\x02\u014B\u014C\x07q\x02\x02\u014C\u014D\x07' +
    'p\x02\x02\u014D\u014E\x07e\x02\x02\u014E\u014F\x07c\x02\x02\u014F\u0150' +
    '\x07v\x02\x02\u0150\u0151\x07*\x02\x02\u0151b\x03\x02\x02\x02\u0152\u0153' +
    '\x07c\x02\x02\u0153\u0154\x07r\x02\x02\u0154\u0155\x07r\x02\x02\u0155' +
    '\u0156\x07g\x02\x02\u0156\u0157\x07p\x02\x02\u0157\u0158\x07f\x02\x02' +
    '\u0158\u0159\x07*\x02\x02\u0159d\x03\x02\x02\x02\u015A\u015E\t\x03\x02' +
    '\x02\u015B\u015D\t\x04\x02\x02\u015C\u015B\x03\x02\x02\x02\u015D\u0160' +
    '\x03\x02\x02\x02\u015E\u015C\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02' +
    '\u015Ff\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0161\u0166\x07$\x02' +
    '\x02\u0162\u0165\x05k6\x02\u0163\u0165\x05s:\x02\u0164\u0162\x03\x02\x02' +
    '\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164' +
    '\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167\u0169\x03\x02\x02\x02' +
    '\u0168\u0166\x03\x02\x02\x02\u0169\u0174\x07$\x02\x02\u016A\u016F\x07' +
    ')\x02\x02\u016B\u016E\x05i5\x02\u016C\u016E\x05q9\x02\u016D\u016B\x03' +
    '\x02\x02\x02\u016D\u016C\x03\x02\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F' +
    '\u016D\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0172\x03\x02' +
    '\x02\x02\u0171\u016F\x03\x02\x02\x02\u0172\u0174\x07)\x02\x02\u0173\u0161' +
    '\x03\x02\x02\x02\u0173\u016A\x03\x02\x02\x02\u0174h\x03\x02\x02\x02\u0175' +
    '\u0178\x07^\x02\x02\u0176\u0179\t\x05\x02\x02\u0177\u0179\x05m7\x02\u0178' +
    '\u0176\x03\x02\x02\x02\u0178\u0177\x03\x02\x02\x02\u0179j\x03\x02\x02' +
    '\x02\u017A\u017D\x07^\x02\x02\u017B\u017E\t\x06\x02\x02\u017C\u017E\x05' +
    'm7\x02\u017D\u017B\x03\x02\x02\x02\u017D\u017C\x03\x02\x02\x02\u017El' +
    '\x03\x02\x02\x02\u017F\u0180\x07w\x02\x02\u0180\u0181\x05o8\x02\u0181' +
    '\u0182\x05o8\x02\u0182\u0183\x05o8\x02\u0183\u0184\x05o8\x02\u0184n\x03' +
    '\x02\x02\x02\u0185\u0186\t\x07\x02\x02\u0186p\x03\x02\x02\x02\u0187\u0188' +
    '\n\b\x02\x02\u0188r\x03\x02\x02\x02\u0189\u018A\n\t\x02\x02\u018At\x03' +
    '\x02\x02\x02\u018B\u018D\x07/\x02\x02\u018C\u018B\x03\x02\x02\x02\u018C' +
    '\u018D\x03\x02\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E\u0195\x05w<\x02' +
    '\u018F\u0191\x070\x02\x02\u0190\u0192\t\n\x02\x02\u0191\u0190\x03\x02' +
    '\x02\x02\u0192\u0193\x03\x02\x02\x02\u0193\u0191\x03\x02\x02\x02\u0193' +
    '\u0194\x03\x02\x02\x02\u0194\u0196\x03\x02\x02\x02\u0195\u018F\x03\x02' +
    '\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196\u0198\x03\x02\x02\x02\u0197' +
    '\u0199\x05y=\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02' +
    '\u0199v\x03\x02\x02\x02\u019A\u01A3\x072\x02\x02\u019B\u019F\t\v\x02\x02' +
    '\u019C\u019E\t\n\x02\x02\u019D\u019C\x03\x02\x02\x02\u019E\u01A1\x03\x02' +
    '\x02\x02\u019F\u019D\x03\x02\x02\x02\u019F\u01A0\x03\x02\x02\x02\u01A0' +
    '\u01A3\x03\x02\x02\x02\u01A1\u019F\x03\x02\x02\x02\u01A2\u019A\x03\x02' +
    '\x02\x02\u01A2\u019B\x03\x02\x02\x02\u01A3x\x03\x02\x02\x02\u01A4\u01A6' +
    '\t\f\x02\x02\u01A5\u01A7\t\r\x02\x02\u01A6\u01A5\x03\x02\x02\x02\u01A6' +
    '\u01A7\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8\u01A9\x05w<\x02' +
    '\u01A9z\x03\x02\x02\x02\u01AA\u01AC\t\x0E\x02\x02\u01AB\u01AA\x03\x02' +
    '\x02\x02\u01AC\u01AD\x03\x02\x02\x02\u01AD\u01AB\x03\x02\x02\x02\u01AD' +
    '\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\b>\x02' +
    '\x02\u01B0|\x03\x02\x02\x02\x15\x02\u010D\u0114\u015E\u0164\u0166\u016D' +
    '\u016F\u0173\u0178\u017D\u018C\u0193\u0195\u0198\u019F\u01A2\u01A6\u01AD' +
    '\x03\b\x02\x02';
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!JSONPathLexer.__ATN) {
      JSONPathLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(JSONPathLexer._serializedATN));
    }

    return JSONPathLexer.__ATN;
  }
}
