// This file is auto generated by the protocol-buffers compiler

/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable camelcase */

// Remember to `npm install --save protocol-buffers-encodings`
var encodings = require('protocol-buffers-encodings')
var varint = encodings.varint
var skip = encodings.skip

exports.FOO = {
  "BAR": 1
}

var Test = exports.Test = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

var AnotherOne = exports.AnotherOne = {
  buffer: true,
  encodingLength: null,
  encode: null,
  decode: null
}

defineTest()
defineAnotherOne()

function defineTest () {
  var enc = [
    encodings.float,
    encodings.string
  ]

  Test.encodingLength = encodingLength
  Test.encode = encode
  Test.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (!defined(obj.num)) throw new Error("num is required")
    var len = enc[0].encodingLength(obj.num)
    length += 1 + len
    if (!defined(obj.payload)) throw new Error("payload is required")
    var len = enc[1].encodingLength(obj.payload)
    length += 1 + len
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (!defined(obj.num)) throw new Error("num is required")
    buf[offset++] = 13
    enc[0].encode(obj.num, buf, offset)
    offset += enc[0].encode.bytes
    if (!defined(obj.payload)) throw new Error("payload is required")
    buf[offset++] = 18
    enc[1].encode(obj.payload, buf, offset)
    offset += enc[1].encode.bytes
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      num: 0,
      payload: ""
    }
    var found0 = false
    var found1 = false
    while (true) {
      if (end <= offset) {
        if (!found0 || !found1) throw new Error("Decoded message is not valid")
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.num = enc[0].decode(buf, offset)
        offset += enc[0].decode.bytes
        found0 = true
        break
        case 2:
        obj.payload = enc[1].decode(buf, offset)
        offset += enc[1].decode.bytes
        found1 = true
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defineAnotherOne () {
  var enc = [
    encodings.enum
  ]

  AnotherOne.encodingLength = encodingLength
  AnotherOne.encode = encode
  AnotherOne.decode = decode

  function encodingLength (obj) {
    var length = 0
    if (defined(obj.list)) {
      for (var i = 0; i < obj.list.length; i++) {
        if (!defined(obj.list[i])) continue
        var len = enc[0].encodingLength(obj.list[i])
        length += 1 + len
      }
    }
    return length
  }

  function encode (obj, buf, offset) {
    if (!offset) offset = 0
    if (!buf) buf = Buffer.allocUnsafe(encodingLength(obj))
    var oldOffset = offset
    if (defined(obj.list)) {
      for (var i = 0; i < obj.list.length; i++) {
        if (!defined(obj.list[i])) continue
        buf[offset++] = 8
        enc[0].encode(obj.list[i], buf, offset)
        offset += enc[0].encode.bytes
      }
    }
    encode.bytes = offset - oldOffset
    return buf
  }

  function decode (buf, offset, end) {
    if (!offset) offset = 0
    if (!end) end = buf.length
    if (!(end <= buf.length && offset <= buf.length)) throw new Error("Decoded message is not valid")
    var oldOffset = offset
    var obj = {
      list: []
    }
    while (true) {
      if (end <= offset) {
        decode.bytes = offset - oldOffset
        return obj
      }
      var prefix = varint.decode(buf, offset)
      offset += varint.decode.bytes
      var tag = prefix >> 3
      switch (tag) {
        case 1:
        obj.list.push(enc[0].decode(buf, offset))
        offset += enc[0].decode.bytes
        break
        default:
        offset = skip(prefix & 7, buf, offset)
      }
    }
  }
}

function defined (val) {
  return val !== null && val !== undefined && (typeof val !== 'number' || !isNaN(val))
}