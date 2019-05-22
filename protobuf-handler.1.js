var a ={
  0: function (e, t) {},
  1: function (e, t) {},
  "1qYw": function (e, t) {
    e.exports = {
      package: null,
      syntax: "proto2",
      messages: [{
          name: "Msg",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "Commands", name: "command_number", id: 1 }, { rule: "optional", type: "bytes", name: "data", id: 2 },
            { rule: "optional", type: "int32", name: "time", id: 3 }
          ],
          enums: [{
            name: "Commands",
            syntax: "proto2",
            values: [{ name: "chart_create_session", id: 0 },
              { name: "chart_delete_session", id: 1 }, { name: "resolve_symbol", id: 2 }, { name: "create_series", id: 3 }, { name: "create_study", id: 4 }, {
                name: "message",
                id: 5
              }, { name: "timescale_update", id: 6 }, { name: "du", id: 7 }, { name: "series_loading", id: 8 }, { name: "series_completed", id: 9 }, {
                name: "series_error",
                id: 10
              }, { name: "series_deleted", id: 11 }, { name: "series_timeframe", id: 12 }, { name: "first_bar_time", id: 13 }, { name: "study_loading", id: 14 },
              { name: "study_completed", id: 15 }, { name: "switch_timezone", id: 16 }, { name: "request_studies_metadata", id: 17 }, { name: "remove_series", id: 18 },
              { name: "modify_series", id: 19 }, { name: "request_more_data", id: 20 }, { name: "get_first_bar_time", id: 21 }, { name: "create_child_study", id: 22 },
              { name: "remove_study", id: 23 }, { name: "modify_study", id: 24 }, { name: "create_pointset", id: 25 }, { name: "symbol_resolved", id: 26 }, {
                name: "study_deleted",
                id: 27
              }, { name: "protocol_error", id: 28 }, { name: "critical_error", id: 29 }, { name: "set_auth_token", id: 30 }, { name: "studies_metadata", id: 31 },
              { name: "set_data_quality", id: 32 }, { name: "quote_create_session", id: 33 }, { name: "quote_set_fields", id: 34 }, { name: "quote_delete_session", id: 35 },
              { name: "quote_add_symbols", id: 36 }, { name: "quote_remove_symbols", id: 37 }, { name: "quote_switch_timezone", id: 38 }, { name: "quote_fast_symbols", id: 39 },
              { name: "quote_hibernate_all", id: 40 }, { name: "qsd", id: 41 }, { name: "quote_list_fields", id: 42 }, { name: "depth_create_session", id: 43 },
              { name: "depth_delete_session", id: 44 }, { name: "depth_set_symbol", id: 45 }, { name: "depth_clear_symbol", id: 46 }, { name: "depth_set_scale", id: 47 },
              { name: "depth_symbol_success", id: 48 }, { name: "depth_symbol_error", id: 49 }, { name: "depth_symbol_cleared", id: 50 }, { name: "dd", id: 51 },
              { name: "depth_bar_last_value", id: 52 }, { name: "remove_pointset", id: 53 }, { name: "study_error", id: 54 }, { name: "modify_pointset", id: 55 },
              { name: "switch_protocol", id: 56 }, { name: "symbol_error", id: 57 }, { name: "request_more_tickmarks", id: 58 }, { name: "tickmark_update", id: 59 },
              { name: "error_message", id: 60 }, { name: "wrong_message_type", id: 61 }, { name: "mock_fire_tick", id: 62 }, { name: "pointset_error", id: 63 },
              { name: "quote_fire_tick", id: 64 }, { name: "quote_fire_crash", id: 65 }, { name: "child_study_rebind", id: 66 }, { name: "replay_point", id: 67 },
              { name: "replay_create_session", id: 68 }, { name: "replay_delete_session", id: 69 }, { name: "replay_add_series", id: 70 }, { name: "replay_remove_series", id: 71 },
              { name: "replay_reset", id: 72 }, { name: "replay_step", id: 73 }, { name: "replay_error", id: 74 }, { name: "replay_ok", id: 75 }, { name: "replay_start", id: 76 },
              { name: "replay_stop", id: 77 }, { name: "replay_resolutions", id: 78 }, { name: "replay_data_end", id: 79 }, { name: "replay_set_resolution", id: 80 },
              { name: "protocol_switched", id: 81 }, { name: "replay_instance_id", id: 82 }
            ]
          }]
        }, {
          name: "chart_create_session",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "parameters", id: 2 }]
        }, { name: "chart_delete_session", syntax: "proto2", fields: [{ rule: "optional", type: "string", name: "session", id: 1 }] }, {
          name: "switch_timezone",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "timezone", id: 2 }]
        }, {
          name: "request_studies_metadata",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "meta_name", id: 2 }]
        },
        {
          name: "resolve_symbol",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "resolve_name",
            id: 2
          }, { rule: "optional", type: "string", name: "symbol", id: 3 }]
        }, {
          name: "symbol_error",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbol", id: 2 },
            { rule: "repeated", type: "string", name: "reason", id: 3 }, { rule: "optional", type: "int32", name: "time", id: 4 }
          ]
        }, {
          name: "create_series",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "series_name", id: 2 }, {
              rule: "optional",
              type: "string",
              name: "turnaround",
              id: 3
            }, { rule: "optional", type: "string", name: "resolve_name", id: 4 }, { rule: "optional", type: "string", name: "resolution", id: 5 },
            { rule: "optional", type: "string", name: "bars", id: 6 }
          ]
        }, {
          name: "remove_series",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 },
            { rule: "optional", type: "string", name: "series_name", id: 2 }
          ]
        }, {
          name: "modify_series",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "string",
            name: "session",
            id: 1
          }, { rule: "optional", type: "string", name: "series_name", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 3 }, {
            rule: "optional",
            type: "string",
            name: "resolve_name",
            id: 4
          }, { rule: "optional", type: "string", name: "resolution", id: 5 }]
        }, {
          name: "request_more_data",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "series_name", id: 2 }, {
              rule: "optional",
              type: "int32",
              name: "count",
              id: 3
            }
          ]
        }, {
          name: "get_first_bar_time",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "symbol_name",
            id: 2
          }, { rule: "optional", type: "string", name: "resolution", id: 3 }]
        }, {
          name: "create_study",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "study_name", id: 2 }, {
              rule: "optional",
              type: "string",
              name: "turnaround",
              id: 3
            }, { rule: "optional", type: "string", name: "parent", id: 4 }, { rule: "optional", type: "string", name: "study", id: 5 }, {
              rule: "optional",
              type: "bytes",
              name: "inputs",
              id: 6
            }
          ]
        }, {
          name: "create_child_study",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 },
            { rule: "optional", type: "string", name: "study_name", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 3 }, {
              rule: "optional",
              type: "string",
              name: "parent",
              id: 4
            }, { rule: "optional", type: "string", name: "study", id: 5 }, { rule: "optional", type: "bytes", name: "inputs", id: 6 }
          ]
        }, {
          name: "child_study_rebind",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "string",
            name: "session",
            id: 1
          }, { rule: "optional", type: "string", name: "study_name", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 3 }, {
            rule: "optional",
            type: "string",
            name: "parent",
            id: 4
          }, { rule: "optional", type: "string", name: "study", id: 5 }, { rule: "optional", type: "bytes", name: "inputs", id: 6 }]
        }, {
          name: "remove_study",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "study_name",
            id: 2
          }]
        }, {
          name: "modify_study",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "study_name",
            id: 2
          }, { rule: "optional", type: "string", name: "turnaround", id: 3 }, { rule: "optional", type: "bytes", name: "inputs", id: 4 }]
        },
        {
          name: "create_pointset",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "ps_name", id: 2 },
            { rule: "optional", type: "string", name: "turnaround", id: 3 }, { rule: "optional", type: "string", name: "symbol", id: 4 }, {
              rule: "optional",
              type: "string",
              name: "interval",
              id: 5
            }, { rule: "optional", type: "string", name: "points", id: 6 }
          ]
        }, {
          name: "modify_pointset",
          syntax: "proto2",
          fields: [{
              rule: "optional",
              type: "string",
              name: "session",
              id: 1
            }, { rule: "optional", type: "string", name: "ps_name", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 3 },
            { rule: "optional", type: "string", name: "points", id: 4 }
          ]
        }, {
          name: "remove_pointset",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "string",
            name: "session",
            id: 1
          }, { rule: "optional", type: "string", name: "ps_name", id: 2 }]
        }, { name: "quote_create_session", syntax: "proto2", fields: [{ rule: "optional", type: "string", name: "session", id: 1 }] }, {
          name: "quote_set_fields",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "fields", id: 2 }]
        }, {
          name: "quote_delete_session",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }]
        }, {
          name: "quote_add_symbols",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "string",
            name: "session",
            id: 1
          }, { rule: "optional", type: "string", name: "symbols", id: 2 }]
        }, {
          name: "quote_remove_symbols",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "repeated", type: "string", name: "symbols", id: 2 }
          ]
        }, {
          name: "quote_switch_timezone",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "timezone", id: 2 }]
        }, {
          name: "quote_fast_symbols",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbols", id: 2 }]
        },
        { name: "quote_hibernate_all", syntax: "proto2", fields: [{ rule: "optional", type: "string", name: "session", id: 1 }] }, {
          name: "quote_fire_tick",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbol", id: 2 }
          ]
        }, {
          name: "quote_fire_crash",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbol", id: 2 }]
        }, {
          name: "depth_create_session",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "double", name: "multiplier", id: 2 }, {
            rule: "optional",
            type: "int32",
            name: "viewport_width",
            id: 3
          }]
        }, { name: "depth_delete_session", syntax: "proto2", fields: [{ rule: "optional", type: "string", name: "session", id: 1 }] }, {
          name: "depth_set_symbol",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbol", id: 2 }]
        }, {
          name: "depth_clear_symbol",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }]
        }, {
          name: "depth_set_scale",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "string",
            name: "session",
            id: 1
          }, { rule: "optional", type: "double", name: "scale", id: 2 }]
        }, {
          name: "replay_create_session",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }
          ]
        }, {
          name: "replay_delete_session",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "string",
            name: "session",
            id: 1
          }]
        }, {
          name: "replay_add_series",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "turnaround",
            id: 2
          }, { rule: "optional", type: "string", name: "symbol", id: 3 }, { rule: "optional", type: "string", name: "resolution", id: 4 }]
        },
        {
          name: "replay_remove_series",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "turnaround",
            id: 2
          }, { rule: "optional", type: "string", name: "symbol", id: 3 }, { rule: "optional", type: "string", name: "resolution", id: 4 }]
        }, {
          name: "replay_reset",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "turnaround", id: 2 }, {
            rule: "optional",
            type: "int32",
            name: "time",
            id: 3
          }]
        }, {
          name: "replay_step",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "turnaround",
            id: 2
          }, { rule: "optional", type: "int32", name: "length", id: 3 }]
        }, {
          name: "replay_start",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "turnaround", id: 2 }, {
              rule: "optional",
              type: "int32",
              name: "delay",
              id: 3
            }
          ]
        }, {
          name: "replay_stop",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "turnaround",
            id: 2
          }]
        }, {
          name: "replay_set_resolution",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "turnaround",
            id: 2
          }, { rule: "optional", type: "string", name: "resolution", id: 3 }]
        }, {
          name: "set_auth_token",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "token", id: 1 }
          ]
        }, {
          name: "set_data_quality",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "string",
            name: "quality",
            id: 1
          }]
        }, {
          name: "request_more_tickmarks",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "series_name",
            id: 2
          }, { rule: "optional", type: "int32", name: "bars", id: 3 }]
        }, {
          name: "switch_protocol",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "DataType",
            name: "protocol",
            id: 1
          }],
          enums: [{ name: "DataType", syntax: "proto2", values: [{ name: "json", id: 0 }, { name: "protobuf", id: 1 }] }]
        }, {
          name: "protocol_switched",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "DataType", name: "protocol", id: 1 }],
          enums: [{
            name: "DataType",
            syntax: "proto2",
            values: [{ name: "json", id: 0 }, { name: "protobuf", id: 1 }]
          }]
        }, {
          name: "mock_fire_tick",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbol", id: 2 },
            { rule: "optional", type: "double", name: "time", id: 3 }, { rule: "optional", type: "double", name: "price", id: 4 }, {
              rule: "optional",
              type: "double",
              name: "size",
              id: 5
            }
          ]
        }, { name: "message", syntax: "proto2", fields: [{ rule: "optional", type: "string", name: "text", id: 1 }] }, {
          name: "protocol_error",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "text", id: 1 }
          ]
        }, {
          name: "critical_error",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 },
            { rule: "optional", type: "string", name: "reason", id: 2 }, { rule: "optional", type: "string", name: "info", id: 3 }
          ]
        }, {
          name: "error_message",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "params", id: 2 }
          ]
        }, {
          name: "wrong_message_type",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "fail_message", id: 1 }]
        }, {
          name: "series_loading",
          syntax: "proto2",
          fields: [{
              rule: "optional",
              type: "string",
              name: "session",
              id: 1
            }, { rule: "optional", type: "string", name: "series_name", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 3 },
            { rule: "optional", type: "int32", name: "time", id: 4 }
          ]
        }, {
          name: "series_completed",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 },
            { rule: "optional", type: "string", name: "series_name", id: 2 }, { rule: "optional", type: "string", name: "update_mode", id: 3 }, {
              rule: "optional",
              type: "string",
              name: "turnaround",
              id: 4
            }, { rule: "optional", type: "int32", name: "time", id: 5 }
          ]
        }, {
          name: "series_error",
          syntax: "proto2",
          fields: [{
              rule: "optional",
              type: "string",
              name: "session",
              id: 1
            }, { rule: "optional", type: "string", name: "series_name", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 3 },
            { rule: "optional", type: "string", name: "reason", id: 4 }, { rule: "optional", type: "string", name: "node", id: 5 }, {
              rule: "optional",
              type: "int32",
              name: "time",
              id: 6
            }
          ]
        }, {
          name: "series_deleted",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "series_name",
            id: 2
          }, { rule: "optional", type: "string", name: "turnaround", id: 3 }, { rule: "optional", type: "int32", name: "time", id: 4 }]
        }, {
          name: "series_timeframe",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "series_name", id: 2 }, {
            rule: "optional",
            type: "string",
            name: "turnaround",
            id: 3
          }, { rule: "optional", type: "int32", name: "left", id: 4 }, { rule: "optional", type: "int32", name: "right", id: 5 }]
        },
        {
          name: "first_bar_time",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbol_id", id: 2 },
            { rule: "optional", type: "double", name: "time", id: 3 }
          ]
        }, {
          name: "study_loading",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 },
            { rule: "optional", type: "string", name: "series_name", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 3 }, {
              rule: "optional",
              type: "int32",
              name: "time",
              id: 4
            }
          ]
        }, {
          name: "study_completed",
          syntax: "proto2",
          fields: [{
            rule: "optional",
            type: "string",
            name: "session",
            id: 1
          }, { rule: "optional", type: "string", name: "series_name", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 4 }, {
            rule: "optional",
            type: "int32",
            name: "time",
            id: 5
          }]
        }, {
          name: "study_deleted",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "study_name",
            id: 2
          }, { rule: "optional", type: "string", name: "turnaround", id: 3 }, { rule: "optional", type: "int32", name: "time", id: 4 }]
        }, {
          name: "study_error",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "study_name",
            id: 2
          }, { rule: "optional", type: "string", name: "turnaround", id: 3 }, { rule: "optional", type: "string", name: "reason", id: 4 }, {
            rule: "optional",
            type: "string",
            name: "node",
            id: 5
          }, { rule: "optional", type: "int32", name: "time", id: 6 }]
        }, {
          name: "timescale_update",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "timescale",
            name: "timescale",
            id: 2
          }, { rule: "optional", type: "objects", name: "objects", id: 3 }, { rule: "optional", type: "int32", name: "time", id: 4 }]
        }, {
          name: "du",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "objects", name: "objects", id: 2 }]
        }, {
          name: "timescale",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "int32", name: "index", id: 1 }, { rule: "optional", type: "int32", name: "zoffset", id: 2 }, {
            rule: "repeated",
            type: "double",
            name: "changes",
            id: 3
          }, { rule: "repeated", type: "marks", name: "marks", id: 4 }, { rule: "repeated", type: "index_diff", name: "index_diff", id: 5 }]
        },
        {
          name: "tickmark_update",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "int32", name: "index", id: 2 },
            { rule: "optional", type: "int32", name: "zoffset", id: 3 }, { rule: "repeated", type: "double", name: "changes", id: 4 }, {
              rule: "repeated",
              type: "marks",
              name: "marks",
              id: 5
            }
          ]
        }, { name: "marks", syntax: "proto2", fields: [{ rule: "repeated", type: "double", name: "value", id: 1 }] }, {
          name: "index_diff",
          syntax: "proto2",
          fields: [
            { rule: "repeated", type: "int32", name: "index", id: 1 }
          ]
        }, { name: "objects", syntax: "proto2", fields: [{ rule: "repeated", type: "series", name: "series", id: 1 }] },
        {
          name: "series",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "series_name", id: 1 }, { rule: "optional", type: "string", name: "node", id: 2 },
            { rule: "repeated", type: "s", name: "data", id: 3 }, { rule: "optional", type: "ns", name: "ns", id: 4 }, { rule: "optional", type: "string", name: "turnaround", id: 5 }
          ]
        },
        {
          name: "ns",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "d", id: 1 }, { rule: "optional", type: "bool", name: "nochange", id: 2 }, {
            rule: "repeated",
            type: "int32",
            name: "indexes",
            id: 3
          }]
        }, {
          name: "st",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "int32", name: "i", id: 1 }, {
            rule: "repeated",
            type: "double",
            name: "value",
            id: 2
          }]
        }, {
          name: "s",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "int32", name: "i", id: 1 }, {
            rule: "repeated",
            type: "double",
            name: "value",
            id: 2
          }]
        }, {
          name: "symbol_resolved",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "symbol_name",
            id: 2
          }, { rule: "optional", type: "string", name: "symbol_info", id: 3 }, { rule: "optional", type: "int32", name: "time", id: 4 }]
        }, {
          name: "studies_metadata",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "meta_name", id: 2 }, {
            rule: "optional",
            type: "string",
            name: "metadata",
            id: 3
          }]
        }, {
          name: "qsd",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, 
            { rule: "optional", type: "string", name: "symbol_name", id: 2 },
            { rule: "optional", type: "string", name: "status", id: 3 },
             { rule: "optional", type: "string", name: "values", id: 4 },
             {
              rule: "optional",
              type: "double",
              name: "lp",
              id: 5
            }, { rule: "optional", type: "float", name: "ch", id: 6 },
             { rule: "optional", type: "float", name: "chp", id: 7 }, {
              rule: "optional",
              type: "double",
              name: "high_price",
              id: 8
            }, { rule: "optional", type: "double", name: "low_price", id: 9 }, { rule: "optional", type: "double", name: "volume", id: 10 },
            { rule: "optional", type: "double", name: "rtc", id: 11 }, { rule: "optional", type: "float", name: "rch", id: 12 }, {
              rule: "optional",
              type: "float",
              name: "rchp",
              id: 13
            }, { rule: "optional", type: "float", name: "bid", id: 14 }, { rule: "optional", type: "float", name: "ask", id: 15 }, {
              rule: "optional",
              type: "float",
              name: "bid_size",
              id: 16
            }, { rule: "optional", type: "float", name: "ask_size", id: 17 }, { rule: "optional", type: "string", name: "rest", id: 19 }
          ]
        }, {
          name: "quote_list_fields",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "fields",
            id: 2
          }]
        }, {
          name: "depth_symbol_success",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "symbol",
            id: 2
          }]
        }, {
          name: "depth_symbol_error",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "symbol",
            id: 2
          }, { rule: "optional", type: "string", name: "reason", id: 3 }]
        }, {
          name: "depth_symbol_cleared",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbol", id: 2 }
          ]
        }, {
          name: "dd",
          syntax: "proto2",
          fields: [
            { rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "depth_data", name: "depth_data", id: 2 }
          ]
        }, {
          name: "depth_data",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "symbol", id: 1 }, { rule: "optional", type: "double", name: "left", id: 2 }, {
            rule: "optional",
            type: "double",
            name: "right",
            id: 3
          }, { rule: "repeated", type: "bs", name: "bids", id: 4 }, { rule: "repeated", type: "bs", name: "asks", id: 5 }]
        }, {
          name: "bs",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "double", name: "price", id: 1 }, { rule: "optional", type: "double", name: "volume", id: 2 }]
        }, {
          name: "depth_bar_last_value",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "symbol", id: 2 }, {
            rule: "optional",
            type: "double",
            name: "last_value",
            id: 3
          }]
        }, {
          name: "pointset_error",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 },
            { rule: "optional", type: "string", name: "set_id", id: 2 }, { rule: "optional", type: "string", name: "turnaround", id: 3 }
          ]
        }, {
          name: "replay_point",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "int32", name: "time", id: 3 }]
        }, {
          name: "replay_ok",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, {
            rule: "optional",
            type: "string",
            name: "turnaround",
            id: 2
          }]
        }, {
          name: "replay_error",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "turnaround", id: 2 },
            { rule: "optional", type: "string", name: "reason", id: 3 }, { rule: "optional", type: "string", name: "info", id: 4 }
          ]
        }, {
          name: "replay_resolutions",
          syntax: "proto2",
          fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "base_resolution", id: 2 }, {
            rule: "optional",
            type: "string",
            name: "min_resolution",
            id: 3
          }]
        }, { name: "replay_data_end", syntax: "proto2", fields: [{ rule: "optional", type: "string", name: "session", id: 1 }] },
        { name: "replay_instance_id", syntax: "proto2", fields: [{ rule: "optional", type: "string", name: "session", id: 1 }, { rule: "optional", type: "string", name: "id", id: 2 }] }
      ],
      isNamespace: !0
    }
  },
  "5iuW": function (e, t, i) {
    "use strict";
    var n = i("DPDv"),
      r = i("1qYw"),
      s = function () {
        for(var e in this._protoMessage = n.loadJson(r)
            .build(), this._Msg = this._protoMessage.Msg, this._commandByNumber = [], this._Msg.Commands) this._commandByNumber[this._Msg.Commands[e]] = e
      };
    s.prototype.decode_message = function (e) {
      var t = this._Msg.decode(e),
        i = this._commandByNumber[t.command_number];
      return { m: i, p: this._protoMessage[i].decode(t.data), time: t.time }
    }, s.prototype.encode_command = function (e, t) {
      return this._Msg
        .encode({ command_number: e, data: this._protoMessage[e].encode(t) })
        .toBuffer()
    }, e.exports = s
  },
  "8oxB": function (e, t) {
    function i() { throw new Error("setTimeout has not been defined") }

    function n() { throw new Error("clearTimeout has not been defined") }

    function r(e) {
      if(f === setTimeout) return setTimeout(e, 0);
      if((f === i || !f) && setTimeout) return f = setTimeout, setTimeout(e, 0);
      try { return f(e, 0) } catch (t) {
        try {
          return f
            .call(null, e, 0)
        } catch (t) { return f.call(this, e, 0) }
      }
    }

    function s() { p && d && (p = !1, d.length ? h = d.concat(h) : c = -1, h.length && o()) }

    function o() {
      var e, t;
      if(!p) {
        for(e = r(s), p = !0, t = h.length; t;) {
          for(d = h, h = []; ++c < t;) d && d[c].run();
          c = -1, t = h.length
        }
        d = null, p = !1,
          function (e) {
            if(u === clearTimeout) return clearTimeout(e);
            if((u === n || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
            try { u(e) } catch (t) {
              try {
                return u
                  .call(null, e)
              } catch (t) { return u.call(this, e) }
            }
          }(e)
      }
    }

    function a(e, t) { this.fun = e, this.array = t }

    function l() {}
    var f, u, h, p, d, c, y = e.exports = {};
    ! function () {
      try { f = "function" == typeof setTimeout ? setTimeout : i } catch (e) { f = i }
      try {
        u = "function" ==
          typeof clearTimeout ? clearTimeout : n
      } catch (e) { u = n }
    }(), h = [], p = !1, c = -1, y.nextTick = function (e) {
        var t, i = new Array(arguments.length - 1);
        if(arguments
          .length > 1)
          for(t = 1; t < arguments.length; t++) i[t - 1] = arguments[t];
        h.push(new a(e, i)), 1 !== h.length || p || r(o)
      }, a.prototype.run = function () { this.fun.apply(null, this.array) }, y.title = "browser", y.browser = !0, y.env = {}, y.argv = [], y
      .version = "", y.versions = {}, y.on = l, y.addListener = l, y.once = l, y.off = l, y.removeListener = l, y.removeAllListeners = l, y.emit = l, y.prependListener = l, y
      .prependOnceListener = l, y.listeners = function (e) { return [] }, y.binding = function (e) { throw new Error("process.binding is not supported") }, y.cwd = function () { return "/" },
      y.chdir = function (e) { throw new Error("process.chdir is not supported") }, y.umask = function () { return 0 }
  },
  DGy1: function (e, t, i) {
    var n, r, s;
    r = [i("yXba")], void 0 === (s = "function" == typeof (n = function (e) {
      "use strict";

      function t(e) { var t = 0; return function () { return t < e.length ? e.charCodeAt(t++) : null } }

      function i() {
        var e = [],
          t = [];
        return function () {
          if(0 === arguments.length) return t.join("") + a.apply(String, e);
          e.length + arguments.length > 1024 && (t.push(a.apply(String, e)), e.length = 0), Array.prototype.push.apply(e, arguments)
        }
      }

      function n(e, t, i, n, r) {
        var s, o, a = 8 * r - n - 1,
          l = (1 << a) - 1,
          f = l >> 1,
          u = -7,
          h = i ? r - 1 : 0,
          p = i ? -1 : 1,
          d = e[t + h];
        for(h += p, s = d & (1 << -u) - 1, d >>= -u, u += a; u > 0; s = 256 * s + e[t + h], h += p, u -= 8);
        for(o = s & (1 << -u) - 1, s >>= -u, u += n; u > 0; o = 256 *
          o + e[t + h], h += p, u -= 8);
        if(0 === s) s = 1 - f;
        else {
          if(s === l) return o ? NaN : 1 / 0 * (d ? -1 : 1);
          o += Math.pow(2, n), s -= f
        }
        return (d ? -1 : 1) * o * Math.pow(2, s - n)
      }

      function r(e, t, i, n, r, s) {
        var o, a, l, f = 8 * s - r - 1,
          u = (1 << f) - 1,
          h = u >> 1,
          p = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = n ? 0 : s - 1,
          c = n ? 1 : -1,
          y = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for(t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, o = u) : (o = Math.floor(Math.log(t) / Math.LN2), t * (l = Math
            .pow(2, -o)) < 1 && (o--, l *= 2), (t += o + h >= 1 ? p / l : p * Math.pow(2, 1 - h)) * l >= 2 && (o++, l /= 2), o + h >= u ? (a = 0, o = u) : o + h >= 1 ? (a = (t * l -
            1) * Math.pow(2, r), o += h) : (a = t * Math.pow(2, h - 1) * Math.pow(2, r), o = 0)); r >= 8; e[i + d] = 255 & a, d += c, a /= 256, r -= 8);
        for(o = o << r | a, f += r; f >
          0; e[i + d] = 255 & o, d += c, o /= 256, f -= 8);
        e[i + d - c] |= 128 * y
      }
      var s, o, a, l, f, u = function (e, t, i) {
        if(void 0 === e && (e = u.DEFAULT_CAPACITY), void 0 === t && (t = u.DEFAULT_ENDIAN), void 0 === i && (i = u.DEFAULT_NOASSERT), !i) {
          if(
            (e |= 0) < 0) throw RangeError("Illegal capacity");
          t = !!t, i = !!i
        }
        this.buffer = 0 === e ? o : new ArrayBuffer(e), this.view = 0 === e ? null : new Uint8Array(this.buffer), this.offset = 0, this.markedOffset = -1, this
          .limit = e, this.littleEndian = t, this.noAssert = i
      };
      return u.VERSION = "5.0.1", u.LITTLE_ENDIAN = !0, u.BIG_ENDIAN = !1, u.DEFAULT_CAPACITY = 16, u.DEFAULT_ENDIAN = u.BIG_ENDIAN, u.DEFAULT_NOASSERT = !1, u.Long = e || null, (s = u
          .prototype)
        .__isByteBuffer__, Object.defineProperty(s, "__isByteBuffer__", { value: !0, enumerable: !1, configurable: !1 }), o = new ArrayBuffer(0), a = String.fromCharCode, u.accessor =
        function () { return Uint8Array }, u.allocate = function (e, t, i) { return new u(e, t, i) }, u.concat = function (e, t, i, n) {
          var r, s, o, a, l, f;
          for("boolean" !=
            typeof t && "string" == typeof t || (n = i, i = t, t = void 0), r = 0, s = 0, o = e.length; s < o; ++s) u.isByteBuffer(e[s]) || (e[s] = u.wrap(e[s], t)), (a = e[s].limit - e[
            s].offset) > 0 && (r += a);
          if(0 === r) return new u(0, i, n);
          for(l = new u(r, i, n), s = 0; s < o;)(a = (f = e[s++])
            .limit - f.offset) <= 0 || (l.view.set(f.view.subarray(f.offset, f.limit), l.offset), l.offset += a);
          return l.limit = l.offset, l.offset = 0, l
        }, u.isByteBuffer =
        function (e) { return !0 === (e && e.__isByteBuffer__) }, u.type = function () { return ArrayBuffer }, u.wrap = function (e, t, i, n) {
          var r, o;
          if("string" != typeof t && (n = i, i = t, t = void 0), "string" == typeof e) switch (void 0 === t && (t = "utf8"), t) {
          case "base64":
            return u.fromBase64(e, i);
          case "hex":
            return u.fromHex(e, i);
          case "binary":
            return u.fromBinary(e, i);
          case "utf8":
            return u.fromUTF8(e, i);
          case "debug":
            return u.fromDebug(e, i);
          default:
            throw Error("Unsupported encoding: " + t)
          }
          if(null === e || "object" != typeof e) throw TypeError("Illegal buffer");
          if(u.isByteBuffer(e)) return (r = s.clone.call(e))
            .markedOffset = -1, r;
          if(e instanceof Uint8Array) r = new u(0, i, n),
            e.length > 0 && (r.buffer = e.buffer, r.offset = e.byteOffset, r.limit = e.byteOffset + e.byteLength, r.view = new Uint8Array(e.buffer));
          else if(e instanceof ArrayBuffer) r = new u(0, i, n), e.byteLength > 0 && (r.buffer = e, r.offset = 0, r.limit = e.byteLength, r.view = e.byteLength > 0 ? new Uint8Array(e) :
            null);
          else {
            if("[object Array]" !== Object.prototype.toString.call(e)) throw TypeError("Illegal buffer");
            for((r = new u(e.length, i, n))
              .limit = e.length, o = 0; o < e.length; ++o) r.view[o] = e[o]
          }
          return r
        }, s.writeBitSet = function (e, t) {
          var i, n, r, s, o, a, l = void 0 === t;
          if(l && (t = this.offset), !this.noAssert) {
            if(!(e instanceof Array)) throw TypeError(
              "Illegal BitSet: Not an array");
            if("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this
              .buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          for(i = t, r = (n = e.length) >> 3, s = 0, t += this
            .writeVarint32(n, t); r--;) o = 1 & !!e[s++] | (1 & !!e[s++]) << 1 | (1 & !!e[s++]) << 2 | (1 & !!e[s++]) << 3 | (1 & !!e[s++]) << 4 | (1 & !!e[s++]) << 5 | (1 & !!e[s++]) <<
            6 | (1 & !!e[s++]) << 7, this.writeByte(o, t++);
          if(s < n) {
            for(a = 0, o = 0; s < n;) o |= (1 & !!e[s++]) << a++;
            this.writeByte(o, t++)
          }
          return l ? (this.offset = t, this) : t - i
        }, s.readBitSet = function (e) {
          var t, i, n, r, s, o, a, l = void 0 === e;
          for(l && (e = this.offset),
            n = (i = (t = this.readVarint32(e))
              .value) >> 3, r = 0, s = [], e += t.length; n--;) o = this.readByte(e++), s[r++] = !!(1 & o), s[r++] = !!(2 & o), s[r++] = !!(4 & o), s[r++] = !!(8 & o), s[r++] = !!(16 &
            o), s[r++] = !!(32 & o), s[r++] = !!(64 & o), s[r++] = !!(128 & o);
          if(r < i)
            for(a = 0, o = this.readByte(e++); r < i;) s[r++] = !!(o >> a++ & 1);
          return l && (this.offset = e), s
        }, s.readBytes = function (e, t) {
          var i, n = void 0 === t;
          if(n && (
              t = this.offset), !this.noAssert) {
            if("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) < 0 || t + e > this
              .buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+" + e + ") <= " + this.buffer.byteLength)
          }
          return i = this.slice(t, t + e), n && (this.offset += e),
            i
        }, s.writeBytes = s.append, s.writeInt8 = function (e, t) {
          var i, n = void 0 === t;
          if(n && (t = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0)
              throw TypeError("Illegal value: " + e + " (not an integer)");
            if(e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t +
              " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          return (t +=
            1) > (i = this.buffer.byteLength) && this.resize((i *= 2) > t ? i : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this
        }, s.writeByte = s.writeInt8, s.readInt8 =
        function (e) {
          var t, i = void 0 === e;
          if(i && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e +
              " (not an integer)");
            if((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer
              .byteLength)
          }
          return 128 == (128 & (t = this.view[e])) && (t = -(255 - t + 1)), i && (this.offset += 1), t
        }, s.readByte = s.readInt8, s.writeUint8 = function (e, t) {
          var i, n = void 0 === t;
          if(n && (t = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
            if(e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          return (t += 1) > (i = this.buffer.byteLength) && this.resize((i *= 2) > t ? i : t), t -= 1, this.view[t] = e, n && (this.offset += 1), this
        }, s.writeUInt8 = s.writeUint8, s.readUint8 = function (e) {
          var t, i = void 0 === e;
          if(i && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0)
              throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e +
              " (+1) <= " + this.buffer.byteLength)
          }
          return t = this.view[e], i && (this.offset += 1), t
        }, s.readUInt8 = s.readUint8, s.writeInt16 = function (e, t) {
          var i, n =
            void 0 === t;
          if(n && (t = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
            if(e |= 0,
              "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError(
              "Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          return (t += 2) > (i = this.buffer.byteLength) && this.resize((i *= 2) > t ? i : t), t -= 2, this
            .littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2),
            this
        }, s.writeShort = s.writeInt16, s.readInt16 = function (e) {
          var t, i = void 0 === e;
          if(i && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0)
              throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e +
              " (+2) <= " + this.buffer.byteLength)
          }
          return t = 0, this.littleEndian ? (t = this.view[e], t |= this.view[e + 1] << 8) : (t = this.view[e] << 8, t |= this.view[e + 1]),
            32768 == (32768 & t) && (t = -(65535 - t + 1)), i && (this.offset += 2), t
        }, s.readShort = s.readInt16, s.writeUint16 = function (e, t) {
          var i, n = void 0 === t;
          if(n && (
              t = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
            if(e >>>= 0, "number" !=
              typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError(
              "Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          return (t += 2) > (i = this.buffer.byteLength) && this.resize((i *= 2) > t ? i : t), t -= 2, this
            .littleEndian ? (this.view[t + 1] = (65280 & e) >>> 8, this.view[t] = 255 & e) : (this.view[t] = (65280 & e) >>> 8, this.view[t + 1] = 255 & e), n && (this.offset += 2),
            this
        }, s.writeUInt16 = s.writeUint16, s.readUint16 = function (e) {
          var t, i = void 0 === e;
          if(i && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 !=
              0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 2 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e +
              " (+2) <= " + this.buffer.byteLength)
          }
          return t = 0, this.littleEndian ? (t = this.view[e], t |= this.view[e + 1] << 8) : (t = this.view[e] << 8, t |= this.view[e + 1]),
            i && (this.offset += 2), t
        }, s.readUInt16 = s.readUint16, s.writeInt32 = function (e, t) {
          var i, n = void 0 === t;
          if(n && (t = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
            if(e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          return (t += 4) > (i = this.buffer.byteLength) && this.resize((i *= 2) > t ? i : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>>
            16 & 255, this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255,
            this.view[t + 3] = 255 & e), n && (this.offset += 4), this
        }, s.writeInt = s.writeInt32, s.readInt32 = function (e) {
          var t, i = void 0 === e;
          if(i && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0)
              throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e +
              " (+4) <= " + this.buffer.byteLength)
          }
          return t = 0, this.littleEndian ? (t = this.view[e + 2] << 16, t |= this.view[e + 1] << 8, t |= this.view[e], t += this.view[e +
            3] << 24 >>> 0) : (t = this.view[e + 1] << 16, t |= this.view[e + 2] << 8, t |= this.view[e + 3], t += this.view[e] << 24 >>> 0), t |= 0, i && (this.offset += 4), t
        }, s
        .readInt = s.readInt32, s.writeUint32 = function (e, t) {
          var i, n = void 0 === t;
          if(n && (t = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0)
              throw TypeError("Illegal value: " + e + " (not an integer)");
            if(e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t +
              " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          return (t +=
            4) > (i = this.buffer.byteLength) && this.resize((i *= 2) > t ? i : t), t -= 4, this.littleEndian ? (this.view[t + 3] = e >>> 24 & 255, this.view[t + 2] = e >>> 16 & 255,
            this.view[t + 1] = e >>> 8 & 255, this.view[t] = 255 & e) : (this.view[t] = e >>> 24 & 255, this.view[t + 1] = e >>> 16 & 255, this.view[t + 2] = e >>> 8 & 255, this.view[
            t + 3] = 255 & e), n && (this.offset += 4), this
        }, s.writeUInt32 = s.writeUint32, s.readUint32 = function (e) {
          var t, i = void 0 === e;
          if(i && (e = this.offset), !this
            .noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength)
              throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
          }
          return t = 0, this.littleEndian ? (t = this.view[e + 2] << 16, t |= this.view[e + 1] <<
              8, t |= this.view[e], t += this.view[e + 3] << 24 >>> 0) : (t = this.view[e + 1] << 16, t |= this.view[e + 2] << 8, t |= this.view[e + 3], t += this.view[e] << 24 >>> 0),
            i && (this.offset += 4), t
        }, s.readUInt32 = s.readUint32, e && (s.writeInt64 = function (t, i) {
            var n, r, s, o = void 0 === i;
            if(o && (i = this.offset), !this.noAssert) {
              if("number" == typeof t) t = e.fromNumber(t);
              else if("string" == typeof t) t = e.fromString(t);
              else if(!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
              if("number" != typeof i || i % 1 != 0) throw TypeError(
                "Illegal offset: " + i + " (not an integer)");
              if((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this
                .buffer.byteLength)
            }
            return "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), i += 8, n = this.buffer.byteLength, i > n && this.resize((n *= 2) > i ? n :
              i), i -= 8, r = t.low, s = t.high, this.littleEndian ? (this.view[i + 3] = r >>> 24 & 255, this.view[i + 2] = r >>> 16 & 255, this.view[i + 1] = r >>> 8 & 255, this.view[
                i] = 255 & r, i += 4, this.view[i + 3] = s >>> 24 & 255,
              this.view[i + 2] = s >>> 16 & 255, this.view[i + 1] = s >>> 8 & 255, this.view[i] = 255 & s) : (this.view[i] = s >>> 24 & 255, this.view[i + 1] = s >>> 16 & 255, this
              .view[i + 2] = s >>> 8 & 255, this.view[i + 3] = 255 & s, i += 4, this.view[i] = r >>> 24 & 255, this.view[i + 1] = r >>> 16 & 255, this.view[i + 2] = r >>> 8 & 255, this
              .view[i + 3] = 255 & r), o && (this.offset += 8), this
          }, s.writeLong = s.writeInt64, s.readInt64 = function (t) {
            var i, n, r, s = void 0 === t;
            if(s && (t = this.offset), !this.noAssert) {
              if("number" != typeof t || t % 1 != 0)
                throw TypeError("Illegal offset: " + t + " (not an integer)");
              if((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t +
                " (+8) <= " + this.buffer.byteLength)
            }
            return i = 0, n = 0, this.littleEndian ? (i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this
              .view[t + 3] << 24 >>> 0, t += 4, n = this.view[t + 2] << 16, n |= this.view[t + 1] << 8, n |= this.view[t], n += this.view[t + 3] << 24 >>> 0) : (n = this.view[t + 1] <<
              16, n |= this.view[t + 2] << 8, n |= this.view[t + 3], n += this.view[t] << 24 >>> 0, t += 4, i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t +
                3], i += this.view[t] << 24 >>> 0), r = new e(i, n, !1), s && (this.offset += 8), r
          }, s.readLong = s.readInt64, s.writeUint64 = function (t, i) {
            var n, r, s, o =
              void 0 === i;
            if(o && (i = this.offset), !this.noAssert) {
              if("number" == typeof t) t = e.fromNumber(t);
              else if("string" == typeof t) t = e.fromString(t);
              else if(!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
              if("number" != typeof i || i % 1 != 0) throw TypeError(
                "Illegal offset: " + i + " (not an integer)");
              if((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this
                .buffer.byteLength)
            }
            return "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t)), i += 8, n = this.buffer.byteLength, i > n && this
              .resize((n *= 2) > i ? n : i), i -= 8, r = t.low, s = t.high, this.littleEndian ? (this.view[i + 3] = r >>> 24 & 255, this.view[i + 2] = r >>> 16 & 255, this.view[i + 1] =
                r >>> 8 & 255, this.view[i] = 255 & r, i += 4, this.view[i + 3] = s >>> 24 & 255, this.view[i + 2] = s >>> 16 & 255, this.view[i + 1] = s >>> 8 & 255, this.view[i] =
                255 & s) : (this.view[i] = s >>> 24 & 255, this.view[i + 1] = s >>> 16 & 255, this.view[i + 2] = s >>> 8 & 255, this.view[i + 3] = 255 & s, i += 4, this.view[i] = r >>>
                24 & 255, this.view[i + 1] = r >>> 16 & 255, this.view[i + 2] = r >>> 8 & 255, this.view[i + 3] = 255 & r), o && (this.offset += 8), this
          }, s.writeUInt64 = s
          .writeUint64, s.readUint64 = function (t) {
            var i, n, r, s = void 0 === t;
            if(s && (t = this.offset), !this.noAssert) {
              if("number" != typeof t || t % 1 != 0) throw TypeError(
                "Illegal offset: " + t + " (not an integer)");
              if((t >>>= 0) < 0 || t + 8 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+8) <= " + this
                .buffer.byteLength)
            }
            return i = 0, n = 0, this.littleEndian ? (i = this.view[t + 2] << 16, i |= this.view[t + 1] << 8, i |= this.view[t], i += this.view[t + 3] << 24 >>>
              0, t += 4, n = this.view[t + 2] << 16, n |= this.view[t + 1] << 8, n |= this.view[t], n += this.view[t + 3] << 24 >>> 0) : (n = this.view[t + 1] << 16, n |= this.view[t +
              2] << 8, n |= this.view[t + 3], n += this.view[t] << 24 >>> 0, t += 4, i = this.view[t + 1] << 16, i |= this.view[t + 2] << 8, i |= this.view[t + 3], i += this.view[
              t] << 24 >>> 0), r = new e(i, n, !0), s && (this.offset += 8), r
          }, s.readUInt64 = s.readUint64), s.writeFloat32 = function (e, t) {
          var i, n = void 0 === t;
          if(n && (t = this.offset), !this.noAssert) {
            if("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
            if("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          return (t += 4) > (i = this.buffer.byteLength) && this.resize((i *= 2) > t ? i : t), t -= 4, r(this.view, e, t, this.littleEndian, 23, 4), n && (this.offset += 4), this
        }, s.writeFloat = s.writeFloat32, s.readFloat32 = function (e) {
          var t, i = void 0 === e;
          if(i && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0)
              throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 4 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e +
              " (+4) <= " + this.buffer.byteLength)
          }
          return t = n(this.view, e, this.littleEndian, 23, 4), i && (this.offset += 4), t
        }, s.readFloat = s.readFloat32, s.writeFloat64 =
        function (e, t) {
          var i, n = void 0 === t;
          if(n && (t = this.offset), !this.noAssert) {
            if("number" != typeof e) throw TypeError("Illegal value: " + e + " (not a number)");
            if(
              "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) < 0 || t + 0 > this.buffer.byteLength) throw RangeError(
              "Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          return (t += 8) > (i = this.buffer.byteLength) && this.resize((i *= 2) > t ? i : t), t -= 8, r(this
            .view, e, t, this.littleEndian, 52, 8), n && (this.offset += 8), this
        }, s.writeDouble = s.writeFloat64, s.readFloat64 = function (e) {
          var t, i = void 0 === e;
          if(i && (e =
              this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 8 > this
              .buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+8) <= " + this.buffer.byteLength)
          }
          return t = n(this.view, e, this.littleEndian, 52, 8), i && (this
            .offset += 8), t
        }, s.readDouble = s.readFloat64, u.MAX_VARINT32_BYTES = 5, u.calculateVarint32 = function (e) {
          return (e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 1 << 21 ?
            3 : e < 1 << 28 ? 4 : 5
        }, u.zigZagEncode32 = function (e) { return ((e |= 0) << 1 ^ e >> 31) >>> 0 }, u.zigZagDecode32 = function (e) { return e >>> 1 ^ -(1 & e) | 0 }, s
        .writeVarint32 = function (e, t) {
          var i, n, r, s = void 0 === t;
          if(s && (t = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError(
              "Illegal value: " + e + " (not an integer)");
            if(e |= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
            if((t >>>= 0) <
              0 || t + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+0) <= " + this.buffer.byteLength)
          }
          for((t += i = u.calculateVarint32(e)) > (r =
              this.buffer.byteLength) && this.resize((r *= 2) > t ? r : t), t -= i, e >>>= 0; e >= 128;) n = 127 & e | 128, this.view[t++] = n, e >>>= 7;
          return this.view[t++] = e, s ? (
            this.offset = t, this) : i
        }, s.writeVarint32ZigZag = function (e, t) { return this.writeVarint32(u.zigZagEncode32(e), t) }, s.readVarint32 = function (e) {
          var t, i, n, r, s = void 0 === e;
          if(s && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 1 >
              this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
          }
          t = 0, i = 0;
          do {
            if(!this.noAssert && e > this.limit) throw (r = Error("Truncated"))
              .truncated = !0, r;
            n = this.view[e++],
              t < 5 && (i |= (127 & n) << 7 * t), ++t
          } while(0 != (128 & n));
          return i |= 0, s ? (this.offset = e, i) : { value: i, length: t }
        }, s.readVarint32ZigZag = function (e) { var t = this.readVarint32(e); return "object" == typeof t ? t.value = u.zigZagDecode32(t.value) : t = u.zigZagDecode32(t), t }, e && (u
          .MAX_VARINT64_BYTES = 10, u.calculateVarint64 = function (t) {
            "number" == typeof t ? t = e.fromNumber(t) : "string" == typeof t && (t = e.fromString(t));
            var i = t.toInt() >>>
              0,
              n = t.shiftRightUnsigned(28)
              .toInt() >>> 0,
              r = t.shiftRightUnsigned(56)
              .toInt() >>> 0;
            return 0 == r ? 0 == n ? i < 16384 ? i < 128 ? 1 : 2 : i < 1 << 21 ? 3 : 4 : n < 16384 ? n < 128 ? 5 : 6 : n < 1 << 21 ? 7 : 8 : r < 128 ? 9 : 10
          }, u
          .zigZagEncode64 = function (t) {
            return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t
                .toSigned()), t.shiftLeft(1)
              .xor(t.shiftRight(63))
              .toUnsigned()
          }, u.zigZagDecode64 = function (t) {
            return "number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t
              .unsigned && (t = t.toSigned()), t.shiftRightUnsigned(1)
              .xor(t.and(e.ONE)
                .toSigned()
                .negate())
              .toSigned()
          }, s.writeVarint64 = function (t, i) {
            var n, r, s, o, a, l = void 0 === i;
            if(l && (i = this.offset), !this.noAssert) {
              if("number" == typeof t) t = e
                .fromNumber(t);
              else if("string" == typeof t) t = e.fromString(t);
              else if(!(t && t instanceof e)) throw TypeError("Illegal value: " + t + " (not an integer or Long)");
              if("number" != typeof i || i % 1 != 0) throw TypeError(
                "Illegal offset: " + i + " (not an integer)");
              if((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this
                .buffer.byteLength)
            }
            switch ("number" == typeof t ? t = e.fromNumber(t, !1) : "string" == typeof t ? t = e.fromString(t, !1) : !1 !== t.unsigned && (t = t.toSigned()),
              n = u.calculateVarint64(t), r = t.toInt() >>> 0, s = t.shiftRightUnsigned(28)
              .toInt() >>> 0, o = t.shiftRightUnsigned(56)
              .toInt() >>> 0, i += n, a = this.buffer.byteLength, i > a && this.resize((a *= 2) > i ? a : i), i -= n, n) {
            case 10:
              this.view[i + 9] = o >>> 7 & 1;
            case 9:
              this.view[i + 8] = 9 !== n ? 128 | o : 127 & o;
            case 8:
              this.view[i + 7] = 8 !== n ? s >>> 21 | 128 : s >>> 21 & 127;
            case 7:
              this.view[i + 6] = 7 !== n ? s >>> 14 | 128 : s >>> 14 & 127;
            case 6:
              this.view[i + 5] = 6 !== n ? s >>> 7 | 128 : s >>> 7 & 127;
            case 5:
              this.view[i + 4] = 5 !== n ? 128 | s : 127 & s;
            case 4:
              this.view[i + 3] = 4 !== n ? r >>> 21 | 128 : r >>> 21 & 127;
            case 3:
              this.view[i + 2] = 3 !== n ? r >>> 14 | 128 : r >>> 14 & 127;
            case 2:
              this.view[i + 1] = 2 !== n ? r >>> 7 | 128 : r >>> 7 & 127;
            case 1:
              this.view[i] = 1 !== n ? 128 | r : 127 & r
            }
            return l ? (this.offset += n, this) : n
          }, s.writeVarint64ZigZag = function (e, t) {
            return this.writeVarint64(u
              .zigZagEncode64(e), t)
          }, s.readVarint64 = function (t) {
            var i, n, r, s, o, a, l = void 0 === t;
            if(l && (t = this.offset), !this.noAssert) {
              if("number" != typeof t || t % 1 != 0) throw TypeError("Illegal offset: " + t + " (not an integer)");
              if((t >>>= 0) < 0 || t +
                1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + t + " (+1) <= " + this.buffer.byteLength)
            }
            if(i = t, n = 0, r = 0, s = 0, o = 0, o = this.view[t++], n = 127 & o, 128 & o && (o = this.view[t++], n |= (127 & o) << 7, (128 & o || this.noAssert && void 0 === o) && (o =
                this.view[t++], n |= (127 & o) << 14, (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++], n |= (127 & o) << 21, (128 & o || this.noAssert && void 0 ===
                  o) && (o = this.view[t++], r = 127 & o, (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++], r |= (127 & o) << 7, (128 & o || this.noAssert &&
                  void 0 === o) && (o = this.view[t++], r |= (127 & o) << 14,
                  (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++], r |= (127 & o) << 21, (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++], s =
                    127 & o, (128 & o || this.noAssert && void 0 === o) && (o = this.view[t++], s |= (127 & o) << 7, 128 & o || this.noAssert && void 0 === o)))))))))) throw Error(
              "Buffer overrun");
            return a = e.fromBits(n | r << 28, r >>> 4 | s << 24, !1), l ? (this.offset = t, a) : { value: a, length: t - i }
          }, s.readVarint64ZigZag = function (t) { var i = this.readVarint64(t); return i && i.value instanceof e ? i.value = u.zigZagDecode64(i.value) : i = u.zigZagDecode64(i), i }), s
        .writeCString = function (e, i) {
          var n, r, s, o = void 0 === i;
          if(o && (i = this.offset), r = e.length, !this.noAssert) {
            if("string" != typeof e) throw TypeError(
              "Illegal str: Not a string");
            for(n = 0; n < r; ++n)
              if(0 === e.charCodeAt(n)) throw RangeError("Illegal str: Contains NULL-characters");
            if("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i +
              " (not an integer)");
            if((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
          }
          return r =
            f.calculateUTF16asUTF8(t(e))[1], i += r + 1, s = this.buffer.byteLength, i > s && this.resize((s *= 2) > i ? s : i), i -= r + 1, f.encodeUTF16toUTF8(t(e), function (e) {
              this
                .view[i++] = e
            }.bind(this)), this.view[i++] = 0, o ? (this.offset = i, this) : r
        }, s.readCString = function (e) {
          var t, n, r, s = void 0 === e;
          if(s && (e = this
              .offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 1 > this.buffer
              .byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
          }
          return t = e, r = -1, f.decodeUTF8toUTF16(function () {
            if(0 === r)
              return null;
            if(e >= this.limit) throw RangeError("Illegal range: Truncated data, " + e + " < " + this.limit);
            return 0 === (r = this.view[e++]) ? null : r
          }.bind(
            this), n = i(), !0), s ? (this.offset = e, n()) : { string: n(), length: e - t }
        }, s.writeIString = function (e, i) {
          var n, r, s, o = void 0 === i;
          if(o && (i = this
              .offset), !this.noAssert) {
            if("string" != typeof e) throw TypeError("Illegal str: Not a string");
            if("number" != typeof i || i % 1 != 0) throw TypeError(
              "Illegal offset: " + i + " (not an integer)");
            if((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer
              .byteLength)
          }
          if(n = i, r = f.calculateUTF16asUTF8(t(e), this.noAssert)[1], i += 4 + r, s = this.buffer.byteLength, i > s && this.resize((s *= 2) > i ? s : i), i -= 4 + r,
            this.littleEndian ? (this.view[i + 3] = r >>> 24 & 255, this.view[i + 2] = r >>> 16 & 255, this.view[i + 1] = r >>> 8 & 255, this.view[i] = 255 & r) : (this.view[i] = r >>>
              24 & 255, this.view[i + 1] = r >>> 16 & 255, this.view[i + 2] = r >>> 8 & 255, this.view[i + 3] = 255 & r), i += 4, f.encodeUTF16toUTF8(t(e), function (e) {
              this.view[
                i++] = e
            }.bind(this)), i !== n + 4 + r) throw RangeError("Illegal range: Truncated data, " + i + " == " + (i + 4 + r));
          return o ? (this.offset = i, this) : i - n
        }, s
        .readIString = function (e) {
          var t, i, n, r = void 0 === e;
          if(r && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 4 >
              this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+4) <= " + this.buffer.byteLength)
          }
          return t = e, i = this.readUint32(e), n = this.readUTF8String(i, u.METRICS_BYTES, e += 4), e += n.length, r ? (this.offset = e, n.string) : {
            string: n.string,
            length: e - t
          }
        }, u.METRICS_CHARS = "c", u.METRICS_BYTES = "b", s.writeUTF8String = function (e, i) {
          var n, r, s, o = void 0 === i;
          if(o && (i = this.offset), !this.noAssert) {
            if("number" !=
              typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
            if((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError(
              "Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
          }
          return r = i, n = f.calculateUTF16asUTF8(t(e))[1], i += n, s = this.buffer.byteLength, i > s && this
            .resize((s *= 2) > i ? s : i), i -= n, f.encodeUTF16toUTF8(t(e), function (e) { this.view[i++] = e }.bind(this)), o ? (this.offset = i, this) : i - r
        }, s.writeString = s
        .writeUTF8String, u.calculateUTF8Chars = function (e) { return f.calculateUTF16asUTF8(t(e))[0] }, u.calculateUTF8Bytes = function (e) { return f.calculateUTF16asUTF8(t(e))[1] },
        u.calculateString = u.calculateUTF8Bytes, s.readUTF8String = function (e, t, n) {
          var r, s, o, a, l;
          if("number" == typeof t && (n = t, t = void 0), (r = void 0 === n) && (n =
              this.offset), void 0 === t && (t = u.METRICS_CHARS), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e +
              " (not an integer)");
            if(e |= 0, "number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n + " (not an integer)");
            if((n >>>= 0) < 0 || n + 0 > this.buffer
              .byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+0) <= " + this.buffer.byteLength)
          }
          if(s = 0, o = n, t === u.METRICS_CHARS) {
            if(a = i(), f.decodeUTF8(
                function () { return s < e && n < this.limit ? this.view[n++] : null }.bind(this),
                function (e) {++s, f.UTF8toUTF16(e, a) }), s !== e) throw RangeError("Illegal range: Truncated data, " + s + " == " + e);
            return r ? (this.offset = n, a()) : { string: a(), length: n - o }
          }
          if(t === u.METRICS_BYTES) {
            if(!this.noAssert) {
              if("number" != typeof n || n % 1 != 0) throw TypeError("Illegal offset: " + n +
                " (not an integer)");
              if((n >>>= 0) < 0 || n + e > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + n + " (+" + e + ") <= " + this.buffer
                .byteLength)
            }
            if(l = n + e, f.decodeUTF8toUTF16(function () { return n < l ? this.view[n++] : null }.bind(this), a = i(), this.noAssert), n !== l) throw RangeError(
              "Illegal range: Truncated data, " + n + " == " + l);
            return r ? (this.offset = n, a()) : { string: a(), length: n - o }
          }
          throw TypeError("Unsupported metrics: " + t)
        }, s
        .readString = s.readUTF8String, s.writeVString = function (e, i) {
          var n, r, s, o, a = void 0 === i;
          if(a && (i = this.offset), !this.noAssert) {
            if("string" != typeof e)
              throw TypeError("Illegal str: Not a string");
            if("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
            if((i >>>= 0) < 0 || i +
              0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
          }
          if(n = i, r = f.calculateUTF16asUTF8(t(e), this
              .noAssert)[1], s = u.calculateVarint32(r), i += s + r, o = this.buffer.byteLength, i > o && this.resize((o *= 2) > i ? o : i), i -= s + r, i += this.writeVarint32(r, i), f
            .encodeUTF16toUTF8(t(e), function (e) { this.view[i++] = e }.bind(this)), i !== n + r + s) throw RangeError("Illegal range: Truncated data, " + i + " == " + (i + r +
            s));
          return a ? (this.offset = i, this) : i - n
        }, s.readVString = function (e) {
          var t, i, n, r = void 0 === e;
          if(r && (e = this.offset), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 || e + 1 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+1) <= " + this.buffer.byteLength)
          }
          return t = e, i = this.readVarint32(e), n = this.readUTF8String(i.value, u.METRICS_BYTES, e += i.length), e += n.length, r ? (this.offset = e, n.string) : {
            string: n.string,
            length: e - t
          }
        }, s.append = function (e, t, i) {
          var n, r, s;
          if("number" != typeof t && "string" == typeof t || (i = t, t = void 0), (n = void 0 === i) && (i = this.offset), !this
            .noAssert) {
            if("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
            if((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength)
              throw RangeError("Illegal offset: 0 <= " + i + " (+0) <= " + this.buffer.byteLength)
          }
          return e instanceof u || (e = u.wrap(e, t)), (r = e.limit - e.offset) <= 0 ? this : (
            i += r, s = this.buffer.byteLength, i > s && this.resize((s *= 2) > i ? s : i), i -= r, this.view.set(e.view.subarray(e.offset, e.limit), i), e.offset += r, n && (this
              .offset += r), this)
        }, s.appendTo = function (e, t) { return e.append(this, t), this }, s.assert = function (e) { return this.noAssert = !e, this }, s.capacity =
        function () { return this.buffer.byteLength }, s.clear = function () { return this.offset = 0, this.limit = this.buffer.byteLength, this.markedOffset = -1, this }, s.clone =
        function (e) {
          var t = new u(0, this.littleEndian, this.noAssert);
          return e ? (t.buffer = new ArrayBuffer(this.buffer.byteLength), t.view = new Uint8Array(t.buffer)) : (t
            .buffer = this.buffer, t.view = this.view), t.offset = this.offset, t.markedOffset = this.markedOffset, t.limit = this.limit, t
        }, s.compact = function (e, t) {
          var i, n,
            r;
          if(void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError(
              "Illegal begin: Not an integer");
            if(e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if(t >>>= 0, e < 0 || e > t || t > this
              .buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
          }
          return 0 === e && t === this.buffer.byteLength ? this :
            0 == (i = t - e) ? (this.buffer = o, this.view = null, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = 0, this) : (n = new ArrayBuffer(i), (
                r = new Uint8Array(n))
              .set(this.view.subarray(e, t)), this.buffer = n, this.view = r, this.markedOffset >= 0 && (this.markedOffset -= e), this.offset = 0, this.limit = i, this)
        }, s.copy =
        function (e, t) {
          if(void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError(
              "Illegal begin: Not an integer");
            if(e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if(t >>>= 0, e < 0 || e > t || t > this
              .buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
          }
          if(e === t) return new u(0, this.littleEndian, this
            .noAssert);
          var i = t - e,
            n = new u(i, this.littleEndian, this.noAssert);
          return n.offset = 0, n.limit = i, n.markedOffset >= 0 && (n.markedOffset -= e), this.copyTo(n, 0, e, t), n
        }, s.copyTo =
        function (e, t, i, n) {
          var r, s, o;
          if(!this.noAssert && !u.isByteBuffer(e)) throw TypeError("Illegal target: Not a ByteBuffer");
          if(t = (s = void 0 === t) ? e.offset : 0 | t, i = (r = void 0 === i) ? this.offset : 0 | i, n = void 0 === n ? this.limit : 0 | n, t < 0 || t > e.buffer.byteLength)
            throw RangeError("Illegal target range: 0 <= " + t + " <= " + e.buffer.byteLength);
          if(i < 0 || n > this.buffer.byteLength) throw RangeError("Illegal source range: 0 <= " + i + " <= " + this.buffer.byteLength);
          return 0 == (o = n - i) ? e : (e.ensureCapacity(t + o), e.view.set(this.view.subarray(i, n), t), r && (this.offset += o), s && (e.offset += o), this)
        }, s.ensureCapacity = function (e) { var t = this.buffer.byteLength; return t < e ? this.resize((t *= 2) > e ? t : e) : this }, s.fill = function (e, t, i) {
          var n = void 0 ===
            t;
          if(n && (t = this.offset), "string" == typeof e && e.length > 0 && (e = e.charCodeAt(0)), void 0 === t && (t = this.offset), void 0 === i && (i = this.limit), !this
            .noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal value: " + e + " (not an integer)");
            if(e |= 0, "number" != typeof t || t % 1 != 0)
              throw TypeError("Illegal begin: Not an integer");
            if(t >>>= 0, "number" != typeof i || i % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if(i >>>= 0, t < 0 || t >
              i || i > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + t + " <= " + i + " <= " + this.buffer.byteLength)
          }
          if(t >= i) return this;
          for(; t < i;) this
            .view[t++] = e;
          return n && (this.offset = t), this
        }, s.flip = function () { return this.limit = this.offset, this.offset = 0, this }, s.mark = function (e) {
          if(e =
            void 0 === e ? this.offset : e, !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal offset: " + e + " (not an integer)");
            if((e >>>= 0) < 0 ||
              e + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + e + " (+0) <= " + this.buffer.byteLength)
          }
          return this.markedOffset = e, this
        }, s.order =
        function (e) { if(!this.noAssert && "boolean" != typeof e) throw TypeError("Illegal littleEndian: Not a boolean"); return this.littleEndian = !!e, this }, s.LE = function (
          e) { return this.littleEndian = void 0 === e || !!e, this }, s.BE = function (e) { return this.littleEndian = void 0 !== e && !e, this }, s.prepend = function (e, t, i) {
          var n,
            r, s, o, a;
          if("number" != typeof t && "string" == typeof t || (i = t, t = void 0), (n = void 0 === i) && (i = this.offset), !this.noAssert) {
            if("number" != typeof i || i %
              1 != 0) throw TypeError("Illegal offset: " + i + " (not an integer)");
            if((i >>>= 0) < 0 || i + 0 > this.buffer.byteLength) throw RangeError("Illegal offset: 0 <= " + i +
              " (+0) <= " + this.buffer.byteLength)
          }
          return e instanceof u || (e = u.wrap(e, t)), (r = e.limit - e.offset) <= 0 ? this : ((s = r - i) > 0 ? (o = new ArrayBuffer(this
              .buffer.byteLength + s), (a = new Uint8Array(o))
            .set(this.view.subarray(i, this.buffer.byteLength), r), this.buffer = o, this.view = a, this.offset += s, this.markedOffset >= 0 && (this.markedOffset += s), this
            .limit += s, i += s) : new Uint8Array(this.buffer), this.view.set(e.view.subarray(e.offset, e.limit), i - r), e.offset = e.limit, n && (this.offset -= r), this)
        }, s
        .prependTo = function (e, t) { return e.prepend(this, t), this }, s.printDebug = function (e) {
          "function" != typeof e && (e = console.log.bind(console)), e(this.toString() +
            "\n-------------------------------------------------------------------\n" + this.toDebug(!0))
        }, s.remaining = function () { return this.limit - this.offset }, s.reset =
        function () { return this.markedOffset >= 0 ? (this.offset = this.markedOffset, this.markedOffset = -1) : this.offset = 0, this }, s.resize = function (e) {
          var t, i;
          if(!this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal capacity: " + e + " (not an integer)");
            if((e |= 0) < 0) throw RangeError(
              "Illegal capacity: 0 <= " + e)
          }
          return this.buffer.byteLength < e && (t = new ArrayBuffer(e), (i = new Uint8Array(t))
            .set(this.view), this.buffer = t, this.view = i), this
        }, s.reverse = function (e, t) {
          if(void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError(
              "Illegal begin: Not an integer");
            if(e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if(t >>>= 0, e < 0 || e > t || t > this
              .buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
          }
          return e === t ? this : (Array.prototype.reverse.call(this
            .view.subarray(e, t)), this)
        }, s.skip = function (e) {
          if(!this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal length: " + e +
              " (not an integer)");
            e |= 0
          }
          var t = this.offset + e;
          if(!this.noAssert && (t < 0 || t > this.buffer.byteLength)) throw RangeError("Illegal length: 0 <= " + this.offset + " + " + e + " <= " +
            this.buffer.byteLength);
          return this.offset = t, this
        }, s.slice = function (e, t) {
          if(void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this
            .noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError("Illegal begin: Not an integer");
            if(e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError(
              "Illegal end: Not an integer");
            if(t >>>= 0, e < 0 || e > t || t > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer
              .byteLength)
          }
          var i = this.clone();
          return i.offset = e, i.limit = t, i
        }, s.toBuffer = function (e) {
          var t, i = this.offset,
            n = this.limit;
          if(!this.noAssert) {
            if("number" != typeof i || i % 1 != 0) throw TypeError("Illegal offset: Not an integer");
            if(i >>>= 0, "number" != typeof n || n % 1 !=
              0) throw TypeError("Illegal limit: Not an integer");
            if(n >>>= 0, i < 0 || i > n || n > this.buffer.byteLength) throw RangeError("Illegal range: 0 <= " + i + " <= " + n +
              " <= " + this.buffer.byteLength)
          }
          return e || 0 !== i || n !== this.buffer.byteLength ? i === n ? o : (t = new ArrayBuffer(n - i), new Uint8Array(t)
            .set(new Uint8Array(this.buffer)
              .subarray(i, n), 0), t) : this.buffer
        }, s.toArrayBuffer = s.toBuffer, s.toString = function (e, t, i) {
          if(void 0 === e) return "ByteBufferAB(offset=" + this.offset +
            ",markedOffset=" + this.markedOffset + ",limit=" + this.limit + ",capacity=" + this.capacity() + ")";
          switch ("number" == typeof e && (i = t = e = "utf8"), e) {
          case "utf8":
            return this.toUTF8(t, i);
          case "base64":
            return this.toBase64(t, i);
          case "hex":
            return this.toHex(t, i);
          case "binary":
            return this.toBinary(t, i);
          case "debug":
            return this.toDebug();
          case "columns":
            return this.toColumns();
          default:
            throw Error("Unsupported encoding: " + e)
          }
        }, l = function () {
          var e, t, i = {},
            n = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109,
              110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47
            ],
            r = [];
          for(e = 0, t = n.length; e < t; ++e) r[n[e]] = e;
          return i.encode = function (e, t) {
            for(var i, r; null !== (i = e());) t(n[i >> 2 & 63]), r = (3 & i) << 4, null !== (i = e()) ? (t(n[63 & ((r |= i >> 4 & 15) | i >> 4 & 15)]),
              r = (15 & i) << 2, null !== (i = e()) ? (t(n[63 & (r | i >> 6 & 3)]), t(n[63 & i])) : (t(n[63 & r]), t(61))) : (t(n[63 & r]), t(61), t(61))
          }, i.decode = function (e,
            t) {
            function i(e) { throw Error("Illegal character code: " + e) }
            for(var n, s, o; null !== (n = e());)
              if(void 0 === (s = r[n]) && i(n),
                null !== (n = e()) && (void 0 === (o = r[n]) && i(n), t(s << 2 >>> 0 | (48 & o) >> 4), null !== (n = e()))) {
                if(void 0 === (s = r[n])) {
                  if(61 === n) break;
                  i(n)
                }
                if(t((15 & o) << 4 >>> 0 | (60 & s) >> 2), null !== (n = e())) {
                  if(void 0 === (o = r[n])) {
                    if(61 === n) break;
                    i(n)
                  }
                  t((3 & s) << 6 >>> 0 | o)
                }
              }
          }, i.test = function (e) { return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e) }, i
        }(), s.toBase64 = function (e, t) {
          if(void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity || e > t) throw RangeError(
            "begin, end");
          var n;
          return l.encode(function () { return e < t ? this.view[e++] : null }.bind(this), n = i()), n()
        }, u.fromBase64 = function (e, i) {
          if("string" !=
            typeof e) throw TypeError("str");
          var n = new u(e.length / 4 * 3, i),
            r = 0;
          return l.decode(t(e), function (e) { n.view[r++] = e }), n.limit = r, n
        }, u.btoa = function (e) {
          return u.fromBinary(e)
            .toBase64()
        }, u.atob = function (e) {
          return u.fromBase64(e)
            .toBinary()
        }, s.toBinary = function (e, t) {
          if(void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), t |= 0, (e |= 0) < 0 || t > this.capacity() || e > t)
            throw RangeError("begin, end");
          if(e === t) return "";
          for(var i = [], n = []; e < t;) i.push(this.view[e++]), i.length >= 1024 && (n.push(String.fromCharCode.apply(String,
            i)), i = []);
          return n.join("") + String.fromCharCode.apply(String, i)
        }, u.fromBinary = function (e, t) {
          if("string" != typeof e) throw TypeError("str");
          for(var i, n = 0,
              r = e.length, s = new u(r, t); n < r;) {
            if((i = e.charCodeAt(n)) > 255) throw RangeError("illegal char code: " + i);
            s.view[n++] = i
          }
          return s.limit = r, s
        }, s.toDebug = function (e) {
          for(var t, i = -1, n = this.buffer.byteLength, r = "", s = "", o = ""; i < n;) {
            if(-1 !== i && (t =
                this.view[i], r += t < 16 ? "0" + t.toString(16)
                .toUpperCase() : t.toString(16)
                .toUpperCase(), e && (s += t > 32 && t < 127 ? String.fromCharCode(t) : ".")), ++i, e && i > 0 && i % 16 == 0 && i !== n) {
              for(; r.length < 51;) r += " ";
              o += r + s + "\n", r = s = ""
            }
            i === this.offset && i === this.limit ? r += i === this.markedOffset ? "!" : "|" : i === this.offset ? r += i === this.markedOffset ? "[" :
              "<" : i === this.limit ? r += i === this.markedOffset ? "]" : ">" : r += i === this.markedOffset ? "'" : e || 0 !== i && i !== n ? " " : ""
          }
          if(e && " " !== r) {
            for(; r
              .length < 51;) r += " ";
            o += r + s + "\n"
          }
          return e ? o : r
        }, u.fromDebug = function (e, t, i) {
          for(var n, r, s = e.length, o = new u((s + 1) / 3 | 0, t, i), a = 0, l = 0, f = !1, h = !1, p = !1,
              d = !1, c = !1; a < s;) {
            switch (n = e.charAt(a++)) {
            case "!":
              if(!i) { if(h || p || d) { c = !0; break } h = p = d = !0 } o.offset = o.markedOffset = o.limit = l, f = !1;
              break;
            case "|":
              if(!i) { if(h || d) { c = !0; break } h = d = !0 } o.offset = o.limit = l, f = !1;
              break;
            case "[":
              if(!i) { if(h || p) { c = !0; break } h = p = !0 } o.offset = o.markedOffset = l, f = !1;
              break;
            case "<":
              if(!i) { if(h) { c = !0; break } h = !0 } o.offset = l, f = !1;
              break;
            case "]":
              if(!i) { if(d || p) { c = !0; break } d = p = !0 } o.limit = o.markedOffset = l, f = !1;
              break;
            case ">":
              if(!i) { if(d) { c = !0; break } d = !0 } o.limit = l, f = !1;
              break;
            case "'":
              if(!i) { if(p) { c = !0; break } p = !0 } o.markedOffset = l, f = !1;
              break;
            case " ":
              f = !1;
              break;
            default:
              if(!i && f) { c = !0; break }
              if(r = parseInt(n + e.charAt(a++), 16), !i && (isNaN(r) || r < 0 || r > 255)) throw TypeError("Illegal str: Not a debug encoded string");
              o.view[l++] = r, f = !0
            }
            if(c) throw TypeError("Illegal str: Invalid symbol at " + a)
          }
          if(!i) {
            if(!h || !d) throw TypeError("Illegal str: Missing offset or limit");
            if(
              l < o.buffer.byteLength) throw TypeError("Illegal str: Not a debug encoded string (is it hex?) " + l + " < " + s)
          }
          return o
        },
        s.toHex = function (e, t) {
          if(e = void 0 === e ? this.offset : e, t = void 0 === t ? this.limit : t, !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError(
              "Illegal begin: Not an integer");
            if(e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if(t >>>= 0, e < 0 || e > t || t > this
              .buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
          }
          for(var i, n = new Array(t - e); e < t;)(i = this.view[
            e++]) < 16 ? n.push("0", i.toString(16)) : n.push(i.toString(16));
          return n.join("")
        }, u.fromHex = function (e, t, i) {
          var n, r, s, o, a;
          if(!i) {
            if("string" != typeof e)
              throw TypeError("Illegal str: Not a string");
            if(e.length % 2 != 0) throw TypeError("Illegal str: Length not a multiple of 2")
          }
          for(n = e.length, r = new u(n / 2 | 0, t),
            o = 0, a = 0; o < n; o += 2) {
            if(s = parseInt(e.substring(o, o + 2), 16), !i && (!isFinite(s) || s < 0 || s > 255)) throw TypeError(
              "Illegal str: Contains non-hex characters");
            r.view[a++] = s
          }
          return r.limit = a, r
        }, f = function () {
          var e = {
            MAX_CODEPOINT: 1114111,
            encodeUTF8: function (e, t) {
              var i = null;
              for("number" == typeof e && (i = e,
                  e = function () { return null }); null !== i || null !== (i = e());) i < 128 ? t(127 & i) : i < 2048 ? (t(i >> 6 & 31 | 192), t(63 & i | 128)) : i < 65536 ? (t(i >>
                12 & 15 | 224), t(i >> 6 & 63 | 128), t(63 & i | 128)) : (t(i >> 18 & 7 | 240), t(i >> 12 & 63 | 128), t(i >> 6 & 63 | 128), t(63 & i | 128)), i = null
            },
            decodeUTF8: function (e, t) {
              for(var i, n, r, s, o = function (e) {
                  e = e.slice(0, e.indexOf(null));
                  var t = Error(e.toString());
                  throw t.name = "TruncatedError", t
                    .bytes = e, t
                }; null !== (i = e());)
                if(0 == (128 & i)) t(i);
                else if(192 == (224 & i)) null === (n = e()) && o([i, n]), t((31 & i) << 6 | 63 & n);
              else if(224 == (240 & i))(null === (n = e()) || null === (r = e())) && o([i, n, r]), t((15 & i) << 12 | (63 & n) << 6 | 63 & r);
              else {
                if(240 != (248 & i)) throw RangeError("Illegal starting byte: " + i);
                (null === (n = e()) || null === (r = e()) || null === (s = e())) && o([i, n, r, s]), t((7 & i) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & s)
              }
            },
            UTF16toUTF8: function (e, t) {
              for(var i, n = null; null !== (i = null !== n ? n : e());) i >= 55296 && i <= 57343 && null !== (n = e()) && n >= 56320 && n <= 57343 ? (t(
                1024 * (i - 55296) + n - 56320 + 65536), n = null) : t(i);
              null !== n && t(n)
            },
            UTF8toUTF16: function (e, t) {
              var i = null;
              for("number" == typeof e && (i = e, e = function () { return null }); null !== i || null !== (i =
                  e());) i <= 65535 ? t(i) : (t(55296 + ((i -= 65536) >> 10)), t(i % 1024 + 56320)), i = null
            },
            encodeUTF16toUTF8: function (t, i) {
              e.UTF16toUTF8(t, function (t) {
                e
                  .encodeUTF8(t, i)
              })
            },
            decodeUTF8toUTF16: function (t, i) { e.decodeUTF8(t, function (t) { e.UTF8toUTF16(t, i) }) },
            calculateCodePoint: function (e) {
              return e <
                128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4
            },
            calculateUTF8: function (e) {
              for(var t, i = 0; null !== (t = e());) i += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 :
                4;
              return i
            },
            calculateUTF16asUTF8: function (t) {
              var i = 0,
                n = 0;
              return e.UTF16toUTF8(t, function (e) {++i, n += e < 128 ? 1 : e < 2048 ? 2 : e < 65536 ? 3 : 4 }), [i, n]
            }
          };
          return e
        }(), s.toUTF8 = function (e, t) {
          if(void 0 === e && (e = this.offset), void 0 === t && (t = this.limit), !this.noAssert) {
            if("number" != typeof e || e % 1 != 0) throw TypeError(
              "Illegal begin: Not an integer");
            if(e >>>= 0, "number" != typeof t || t % 1 != 0) throw TypeError("Illegal end: Not an integer");
            if(t >>>= 0, e < 0 || e > t || t > this
              .buffer.byteLength) throw RangeError("Illegal range: 0 <= " + e + " <= " + t + " <= " + this.buffer.byteLength)
          }
          var n;
          try {
            f.decodeUTF8toUTF16(function () {
              return e < t ? this.view[e++] : null
            }.bind(this), n = i())
          } catch (i) { if(e !== t) throw RangeError("Illegal range: Truncated data, " + e + " != " + t) }
          return n()
        }, u.fromUTF8 = function (e, i, n) {
          if(!n && "string" != typeof e) throw TypeError("Illegal str: Not a string");
          var r = new u(f.calculateUTF16asUTF8(t(e), !0)[1], i, n),
            s = 0;
          return f.encodeUTF16toUTF8(t(e), function (e) { r.view[s++] = e }), r.limit = s, r
        }, u
    }) ? n.apply(t, r) : n) || (e.exports = s)
  },
  DPDv: function (e, t, i) {
    (function (n) {
      var r, s, o;
      s = [i("DGy1")], void 0 === (o = "function" == typeof (r = function (e, t) {
        "use strict";
        var r, s = {};
        return s.ByteBuffer = e, s.Long = e.Long || null, s.VERSION = "5.0.3", s.WIRE_TYPES = {}, s.WIRE_TYPES.VARINT = 0, s.WIRE_TYPES.BITS64 = 1, s.WIRE_TYPES.LDELIM = 2, s
          .WIRE_TYPES.STARTGROUP = 3, s.WIRE_TYPES.ENDGROUP = 4, s.WIRE_TYPES.BITS32 = 5, s.PACKABLE_WIRE_TYPES = [s.WIRE_TYPES.VARINT, s.WIRE_TYPES.BITS64, s.WIRE_TYPES.BITS32], s
          .TYPES = {
            int32: { name: "int32", wireType: s.WIRE_TYPES.VARINT, defaultValue: 0 },
            uint32: { name: "uint32", wireType: s.WIRE_TYPES.VARINT, defaultValue: 0 },
            sint32: { name: "sint32", wireType: s.WIRE_TYPES.VARINT, defaultValue: 0 },
            int64: {
              name: "int64",
              wireType: s.WIRE_TYPES.VARINT,
              defaultValue: s.Long ? s.Long.ZERO : void 0
            },
            uint64: { name: "uint64", wireType: s.WIRE_TYPES.VARINT, defaultValue: s.Long ? s.Long.UZERO : void 0 },
            sint64: {
              name: "sint64",
              wireType: s.WIRE_TYPES
                .VARINT,
              defaultValue: s.Long ? s.Long.ZERO : void 0
            },
            bool: { name: "bool", wireType: s.WIRE_TYPES.VARINT, defaultValue: !1 },
            double: {
              name: "double",
              wireType: s
                .WIRE_TYPES.BITS64,
              defaultValue: 0
            },
            string: { name: "string", wireType: s.WIRE_TYPES.LDELIM, defaultValue: "" },
            bytes: {
              name: "bytes",
              wireType: s.WIRE_TYPES
                .LDELIM,
              defaultValue: null
            },
            fixed32: { name: "fixed32", wireType: s.WIRE_TYPES.BITS32, defaultValue: 0 },
            sfixed32: {
              name: "sfixed32",
              wireType: s.WIRE_TYPES
                .BITS32,
              defaultValue: 0
            },
            fixed64: { name: "fixed64", wireType: s.WIRE_TYPES.BITS64, defaultValue: s.Long ? s.Long.UZERO : void 0 },
            sfixed64: {
              name: "sfixed64",
              wireType: s.WIRE_TYPES.BITS64,
              defaultValue: s.Long ? s.Long.ZERO : void 0
            },
            float: { name: "float", wireType: s.WIRE_TYPES.BITS32, defaultValue: 0 },
            enum: { name: "enum", wireType: s.WIRE_TYPES.VARINT, defaultValue: 0 },
            message: { name: "message", wireType: s.WIRE_TYPES.LDELIM, defaultValue: null },
            group: { name: "group", wireType: s.WIRE_TYPES.STARTGROUP, defaultValue: null }
          }, s.MAP_KEY_TYPES = [s.TYPES.int32, s.TYPES.sint32, s.TYPES.sfixed32, s.TYPES.uint32, s
            .TYPES.fixed32, s.TYPES.int64, s.TYPES.sint64, s.TYPES.sfixed64, s.TYPES.uint64, s.TYPES.fixed64, s.TYPES.bool, s.TYPES.string, s.TYPES.bytes
          ], s.ID_MIN = 1, s.ID_MAX = 536870911, s.convertFieldsToCamelCase = !1, s.populateAccessors = !0, s.populateDefaults = !0, s.Util = ((r = {})
            .IS_NODE = !("object" != typeof n || n + "" != "[object process]" || n.browser), r.XHR = function () {
              var e, t = [function () { return new XMLHttpRequest },
                  function () { return new ActiveXObject("Msxml2.XMLHTTP") },
                  function () { return new ActiveXObject("Msxml3.XMLHTTP") },
                  function () {
                    return new ActiveXObject(
                      "Microsoft.XMLHTTP")
                  }
                ],
                i = null;
              for(e = 0; e < t.length; e++) { try { i = t[e]() } catch (e) { continue } break }
              if(!i) throw Error("XMLHttpRequest is not supported");
              return i
            }, r.fetch =
            function (e, t) {
              var n, s;
              if(t && "function" != typeof t && (t = null), r.IS_NODE)
                if(n = i(1), t) n.readFile(e, function (e, i) { t(e ? null : "" + i) });
                else try {
                  return n.readFileSync(e)
                } catch (e) { return null } else {
                  if((s = r.XHR())
                    .open("GET", e, !!t), s.setRequestHeader("Accept", "text/plain"), "function" == typeof s.overrideMimeType && s.overrideMimeType("text/plain"), !t) return s.send(
                    null), 200 == s.status || 0 == s.status && "string" == typeof s.responseText ? s.responseText : null;
                  if(s.onreadystatechange = function () {
                      4 == s.readyState &&
                        (200 == s.status || 0 == s.status && "string" == typeof s.responseText ? t(s.responseText) : t(null))
                    }, 4 == s.readyState) return;
                  s.send(null)
                }
            }, r.toCamelCase = function (e) { return e.replace(/_([a-zA-Z])/g, function (e, t) { return t.toUpperCase() }) }, r), s.Lang = {
            DELIM: /[\s\{\}=;:\[\],'"\(\)<>]/g,
            RULE: /^(?:required|optional|repeated|map)$/,
            TYPE: /^(?:double|float|int32|uint32|sint32|int64|uint64|sint64|fixed32|sfixed32|fixed64|sfixed64|bool|string|bytes)$/,
            NAME: /^[a-zA-Z_][a-zA-Z_0-9]*$/,
            TYPEDEF: /^[a-zA-Z][a-zA-Z_0-9]*$/,
            TYPEREF: /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
            FQTYPEREF: /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/,
            NUMBER: /^-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+|([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?)|inf|nan)$/,
            NUMBER_DEC: /^(?:[1-9][0-9]*|0)$/,
            NUMBER_HEX: /^0[xX][0-9a-fA-F]+$/,
            NUMBER_OCT: /^0[0-7]+$/,
            NUMBER_FLT: /^([0-9]*(\.[0-9]*)?([Ee][+-]?[0-9]+)?|inf|nan)$/,
            BOOL: /^(?:true|false)$/i,
            ID: /^(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
            NEGID: /^\-?(?:[1-9][0-9]*|0|0[xX][0-9a-fA-F]+|0[0-7]+)$/,
            WHITESPACE: /\s/,
            STRING: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")|(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
            STRING_DQ: /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
            STRING_SQ: /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g
          }, s
          .Reflect = function (t) {
            function i(e, i) {
              if(e && "number" == typeof e.low && "number" == typeof e.high && "boolean" == typeof e.unsigned && e.low == e.low && e.high == e.high) return new t.Long(
                e.low, e.high, void 0 === i ? e.unsigned : i);
              if("string" == typeof e) return t.Long.fromString(e, i || !1, 10);
              if("number" == typeof e) return t.Long.fromNumber(e,
                i || !1);
              throw Error("not convertible to Long")
            }

            function n(e, i) {
              var r = i.readVarint32(),
                s = 7 & r,
                o = r >>> 3;
              switch (s) {
              case t.WIRE_TYPES.VARINT:
                do { r = i.readUint8() } while(128 == (128 & r));
                break;
              case t.WIRE_TYPES.BITS64:
                i.offset += 8;
                break;
              case t.WIRE_TYPES.LDELIM:
                r = i.readVarint32(), i.offset += r;
                break;
              case t.WIRE_TYPES.STARTGROUP:
                n(o, i);
                break;
              case t.WIRE_TYPES.ENDGROUP:
                if(o === e) return !1;
                throw Error("Illegal GROUPEND after unknown group: " + o + " (" + e + " expected)");
              case t.WIRE_TYPES.BITS32:
                i.offset += 4;
                break;
              default:
                throw Error("Illegal wire type in unknown group " + e + ": " + s)
              }
              return !0
            }
            var r, s, o, a, l, f, u, h, p, d, c, y, g, m, b, v, w = {},
              E = function (e, t, i) { this.builder = e, this.parent = t, this.name = i, this.className },
              _ = E.prototype;
            return _.fqn = function () { for(var e = this.name, t = this; null != (t = t.parent);) e = t.name + "." + e; return e }, _.toString = function (e) {
                return (e ? this
                  .className + " " : "") + this.fqn()
              }, _.build = function () { throw Error(this.toString(!0) + " cannot be built directly") }, w.T = E, (s = (r = function (e, t, i,
                  n, r) { E.call(this, e, t, i), this.className = "Namespace", this.children = [], this.options = n || {}, this.syntax = r || "proto2" })
                .prototype = Object.create(E.prototype))
              .getChildren = function (e) {
                var t, i, n;
                if(null == (e = e || null)) return this.children.slice();
                for(t = [], i = 0,
                  n = this.children.length; i < n; ++i) this.children[i] instanceof e && t.push(this.children[i]);
                return t
              }, s.addChild = function (e) {
                var t;
                if(t = this.getChild(e.name))
                  if(t instanceof l.Field && t.name !== t.originalName && null === this.getChild(t.originalName)) t.name = t.originalName;
                  else {
                    if(!(e instanceof l.Field && e.name !== e.originalName && null === this.getChild(e.originalName))) throw Error("Duplicate name in namespace " + this.toString(!
                      0) + ": " + e.name);
                    e.name = e.originalName
                  } this.children.push(e)
              }, s.getChild = function (e) {
                var t, i, n = "number" == typeof e ? "id" : "name";
                for(t = 0, i = this.children
                  .length; t < i; ++t)
                  if(this.children[t][n] === e) return this.children[t];
                return null
              }, s.resolve = function (e, t) {
                var i, n = "string" == typeof e ? e.split(".") : e,
                  r = this,
                  s = 0;
                if("" === n[s]) {
                  for(; null !== r.parent;) r = r.parent;
                  s++
                }
                do {
                  do {
                    if(!(r instanceof w.Namespace)) { r = null; break }
                    if(!(i = r.getChild(n[s])) || !(i instanceof w.T) || t && !(i instanceof w.Namespace)) {
                      r =
                        null;
                      break
                    }
                    r = i, s++
                  } while(s < n.length);
                  if(null != r) break;
                  if(null !== this.parent) return this.parent.resolve(e, t)
                } while(null != r);
                return r
              }, s
              .qn = function (e) {
                var t, i, n = [],
                  r = e;
                do { n.unshift(r.name), r = r.parent } while(null !== r);
                for(t = 1; t <= n.length; t++)
                  if(i = n.slice(n.length - t), e === this.resolve(i, e instanceof w.Namespace)) return i.join(".");
                return e.fqn()
              }, s.build = function () {
                var e, t, i, n = {},
                  s = this.children;
                for(e = 0, t = s.length; e < t; ++e)(i = s[e]) instanceof r && (n[i.name] = i.build());
                return Object.defineProperty && Object.defineProperty(n,
                  "$options", { value: this.buildOpt() }), n
              }, s.buildOpt = function () {
                var e, t, i, n, r = {},
                  s = Object.keys(this.options);
                for(e = 0, t = s.length; e < t; ++e) i = s[e], n = this.options[s[e]], r[i] = n;
                return r
              }, s.getOption = function (
                e) { return void 0 === e ? this.options : void 0 !== this.options[e] ? this.options[e] : null }, w.Namespace = r, a = (o = function (e, i, n, r, s) {
                if(this.type = e,
                  this.resolvedType = i, this.isMapKey = n, this.syntax = r, this.name = s, n && t.MAP_KEY_TYPES.indexOf(e) < 0) throw Error("Invalid map key type: " + e.name)
              })
              .prototype, o.defaultFieldValue = function (i) {
                if("string" == typeof i && (i = t.TYPES[i]), void 0 === i.defaultValue) throw Error("default value for type " + i.name +
                  " is not supported");
                return i == t.TYPES.bytes ? new e(0) : i.defaultValue
              }, a.toString = function () {
                return (this.name || "") + (this.isMapKey ? "map" :
                  "value") + " element"
              }, a.verifyValue = function (n) {
                function r(e, t) { throw Error("Illegal value for " + l.toString(!0) + " of type " + l.type.name + ": " + e + " (" + t + ")") }
                var s, o, a, l = this;
                switch (this.type) {
                case t.TYPES.int32:
                case t.TYPES.sint32:
                case t.TYPES.sfixed32:
                  return ("number" != typeof n || n == n && n % 1 != 0) && r(typeof n, "not an integer"), n > 4294967295 ? 0 | n : n;
                case t.TYPES.uint32:
                case t.TYPES.fixed32:
                  return ("number" != typeof n || n == n && n % 1 != 0) && r(typeof n, "not an integer"), n < 0 ? n >>> 0 : n;
                case t.TYPES.int64:
                case t.TYPES.sint64:
                case t.TYPES.sfixed64:
                  if(t.Long) try { return i(n, !1) } catch (e) { r(typeof n, e.message) } else r(typeof n, "requires Long.js");
                case t.TYPES.uint64:
                case t.TYPES.fixed64:
                  if(t.Long) try { return i(n, !0) } catch (e) { r(typeof n, e.message) } else r(typeof n, "requires Long.js");
                case t.TYPES.bool:
                  return "boolean" != typeof n && r(typeof n, "not a boolean"), n;
                case t.TYPES.float:
                case t.TYPES.double:
                  return "number" != typeof n && r(typeof n, "not a number"), n;
                case t.TYPES.string:
                  return "string" == typeof n || n && n instanceof String || r(typeof n, "not a string"), "" + n;
                case t.TYPES.bytes:
                  return e.isByteBuffer(n) ? n : e.wrap(n, "base64");
                case t.TYPES.enum:
                  for(s = this.resolvedType.getChildren(t.Reflect.Enum.Value), a = 0; a < s.length; a++) { if(s[a].name == n) return s[a].id; if(s[a].id == n) return s[a].id }
                  if("proto3" === this.syntax) return ("number" != typeof n || n == n && n % 1 != 0) && r(typeof n, "not an integer"), (n > 4294967295 || n < 0) && r(typeof n,
                    "not in range for uint32"), n;
                  r(n, "not a valid enum value");
                case t.TYPES.group:
                case t.TYPES.message:
                  if(n && "object" == typeof n || r(typeof n, "object expected"), n instanceof this.resolvedType.clazz) return n;
                  if(n instanceof t.Builder.Message) {
                    for(a in o = {}, n) n.hasOwnProperty(a) && (o[a] = n[a]);
                    n = o
                  }
                  return new this.resolvedType.clazz(n)
                }
                throw Error("[INTERNAL] Illegal value for " + this.toString(!0) + ": " + n + " (undefined type " + this.type + ")")
              }, a.calculateLength = function (i, n) {
                if(null === n) return 0;
                var r;
                switch (this.type) {
                case t.TYPES.int32:
                  return n < 0 ? e.calculateVarint64(n) : e.calculateVarint32(n);
                case t.TYPES.uint32:
                  return e.calculateVarint32(n);
                case t.TYPES.sint32:
                  return e.calculateVarint32(e.zigZagEncode32(n));
                case t.TYPES.fixed32:
                case t.TYPES.sfixed32:
                case t.TYPES.float:
                  return 4;
                case t.TYPES.int64:
                case t.TYPES.uint64:
                  return e.calculateVarint64(n);
                case t.TYPES.sint64:
                  return e.calculateVarint64(e.zigZagEncode64(n));
                case t.TYPES.fixed64:
                case t.TYPES.sfixed64:
                  return 8;
                case t.TYPES.bool:
                  return 1;
                case t.TYPES.enum:
                  return e.calculateVarint32(n);
                case t.TYPES.double:
                  return 8;
                case t.TYPES.string:
                  return r = e.calculateUTF8Bytes(n), e.calculateVarint32(r) + r;
                case t.TYPES.bytes:
                  if(n.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + n.remaining() + " bytes remaining");
                  return e.calculateVarint32(n.remaining()) + n
                    .remaining();
                case t.TYPES.message:
                  return r = this.resolvedType.calculate(n), e.calculateVarint32(r) + r;
                case t.TYPES.group:
                  return (r = this.resolvedType.calculate(n)) + e.calculateVarint32(i << 3 | t.WIRE_TYPES.ENDGROUP)
                }
                throw Error("[INTERNAL] Illegal value to encode in " + this
                  .toString(!0) + ": " + n + " (unknown type)")
              }, a.encodeValue = function (i, n, r) {
                var s, o;
                if(null === n) return r;
                switch (this.type) {
                case t.TYPES.int32:
                  n < 0 ? r.writeVarint64(n) : r.writeVarint32(n);
                  break;
                case t.TYPES.uint32:
                  r.writeVarint32(n);
                  break;
                case t.TYPES.sint32:
                  r.writeVarint32ZigZag(n);
                  break;
                case t.TYPES.fixed32:
                  r.writeUint32(n);
                  break;
                case t.TYPES.sfixed32:
                  r.writeInt32(n);
                  break;
                case t.TYPES.int64:
                case t.TYPES.uint64:
                  r.writeVarint64(n);
                  break;
                case t.TYPES.sint64:
                  r.writeVarint64ZigZag(n);
                  break;
                case t.TYPES.fixed64:
                  r.writeUint64(n);
                  break;
                case t.TYPES.sfixed64:
                  r.writeInt64(n);
                  break;
                case t.TYPES.bool:
                  "string" == typeof n ? r.writeVarint32("false" === n.toLowerCase() ? 0 : !!n) : r.writeVarint32(n ? 1 : 0);
                  break;
                case t.TYPES.enum:
                  r.writeVarint32(n);
                  break;
                case t.TYPES.float:
                  r.writeFloat32(n);
                  break;
                case t.TYPES.double:
                  r.writeFloat64(n);
                  break;
                case t.TYPES.string:
                  r.writeVString(n);
                  break;
                case t.TYPES.bytes:
                  if(n.remaining() < 0) throw Error("Illegal value for " + this.toString(!0) + ": " + n.remaining() + " bytes remaining");
                  s = n.offset, r.writeVarint32(n.remaining()), r.append(n), n.offset = s;
                  break;
                case t.TYPES.message:
                  o = (new e)
                    .LE(), this.resolvedType.encode(n, o), r.writeVarint32(o.offset), r.append(o.flip());
                  break;
                case t.TYPES.group:
                  this.resolvedType.encode(n, r), r.writeVarint32(i << 3 | t.WIRE_TYPES.ENDGROUP);
                  break;
                default:
                  throw Error("[INTERNAL] Illegal value to encode in " + this.toString(!0) + ": " + n + " (unknown type)")
                }
                return r
              }, a.decode = function (e, i, n) {
                if(i != this.type.wireType) throw Error("Unexpected wire type for element");
                var r, s;
                switch (this.type) {
                case t.TYPES.int32:
                  return 0 | e.readVarint32();
                case t.TYPES.uint32:
                  return e.readVarint32() >>> 0;
                case t.TYPES.sint32:
                  return 0 | e.readVarint32ZigZag();
                case t.TYPES.fixed32:
                  return e.readUint32() >>> 0;
                case t.TYPES.sfixed32:
                  return 0 | e.readInt32();
                case t.TYPES.int64:
                  return e.readVarint64();
                case t.TYPES.uint64:
                  return e.readVarint64()
                    .toUnsigned();
                case t.TYPES.sint64:
                  return e.readVarint64ZigZag();
                case t.TYPES.fixed64:
                  return e.readUint64();
                case t.TYPES.sfixed64:
                  return e.readInt64();
                case t.TYPES.bool:
                  return !!e.readVarint32();
                case t.TYPES.enum:
                  return e.readVarint32();
                case t.TYPES.float:
                  return e.readFloat();
                case t.TYPES.double:
                  return e.readDouble();
                case t.TYPES.string:
                  return e.readVString();
                case t.TYPES.bytes:
                  if(s = e.readVarint32(), e.remaining() < s) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " + s + " required but got only " + e
                    .remaining());
                  return (r = e.clone())
                    .limit = r.offset + s, e.offset += s, r;
                case t.TYPES.message:
                  return s = e.readVarint32(), this.resolvedType.decode(e, s);
                case t.TYPES.group:
                  return this.resolvedType.decode(e, -1, n)
                }
                throw Error("[INTERNAL] Illegal decode type")
              }, a.valueFromString = function (i) {
                if(!this.isMapKey) throw Error(
                  "valueFromString() called on non-map-key element");
                switch (this.type) {
                case t.TYPES.int32:
                case t.TYPES.sint32:
                case t.TYPES.sfixed32:
                case t.TYPES.uint32:
                case t.TYPES.fixed32:
                  return this.verifyValue(parseInt(i));
                case t.TYPES.int64:
                case t.TYPES.sint64:
                case t.TYPES.sfixed64:
                case t.TYPES.uint64:
                case t.TYPES.fixed64:
                  return this.verifyValue(i);
                case t.TYPES.bool:
                  return "true" === i;
                case t.TYPES.string:
                  return this.verifyValue(i);
                case t.TYPES.bytes:
                  return e.fromBinary(i)
                }
              }, a.valueToString = function (e) {
                if(!this.isMapKey) throw Error("valueToString() called on non-map-key element");
                return this.type === t
                  .TYPES.bytes ? e.toString("binary") : e.toString()
              }, w.Element = o, (f = (l = function (e, t, i, n, s, o) {
                  r.call(this, e, t, i, n, o), this.className = "Message",
                    this.extensions = void 0, this.clazz = null, this.isGroup = !!s, this._fields = null, this._fieldsById = null, this._fieldsByName = null
                })
                .prototype = Object.create(r.prototype))
              .build = function (i) {
                var n, r, s, o;
                if(this.clazz && !i) return this.clazz;
                for(n = function (t, i) {
                    function n(i, r, s, o) {
                      var a, l, f, u, h, p, d;
                      if(null === i || "object" != typeof i) return o && o instanceof t.Reflect.Enum && null !== (a = t.Reflect.Enum.getName(o.object, i)) ? a : i;
                      if(e.isByteBuffer(i)) return r ? i.toBase64() : i.toBuffer();
                      if(t.Long.isLong(i)) return s ? i.toString() : t.Long.fromValue(i);
                      if(Array.isArray(i)) return l = [],
                        i.forEach(function (e, t) { l[t] = n(e, r, s, o) }), l;
                      if(l = {}, i instanceof t.Map) {
                        for(u = (f = i.entries())
                          .next(); !u.done; u = f.next()) l[i.keyElem.valueToString(u.value[0])] = n(u.value[1], r, s, i.valueElem.resolvedType);
                        return l
                      }
                      for(d in h = i.$type, p = void 0, i) i.hasOwnProperty(d) && (h && (p = h.getChild(d)) ? l[d] = n(i[d], r, s, p.resolvedType) : l[d] = n(i[d], r, s));
                      return l
                    }
                    var r, s, o = i.getChildren(t.Reflect.Message.Field),
                      a = i.getChildren(t.Reflect.Message.OneOf),
                      l = function (n, r) {
                        var s, f, u, h;
                        for(t.Builder.Message.call(this), s = 0, f = a.length; s < f; ++s) this[a[s].name] = null;
                        for(s = 0, f = o.length; s <
                          f; ++s) this[(u = o[s])
                          .name] = u.repeated ? [] : u.map ? new t.Map(u) : null, !u.required && "proto3" !== i.syntax || null === u.defaultValue || (this[u.name] = u
                          .defaultValue);
                        if(arguments.length > 0)
                          if(1 !== arguments.length || null === n || "object" != typeof n || !("function" != typeof n.encode || n instanceof l) || Array.isArray(n) || n instanceof t
                            .Map || e.isByteBuffer(n) || n instanceof ArrayBuffer || t.Long && n instanceof t.Long)
                            for(s = 0, f = arguments.length; s < f; ++s) void 0 !== (h = arguments[s]) && this.$set(o[s].name, h);
                          else this.$set(n)
                      },
                      f = l.prototype = Object.create(t.Builder.Message.prototype);
                    for(f.add = function (e, n, r) {
                        var s = i._fieldsByName[e];
                        if(!r) {
                          if(!s) throw Error(this + "#" + e + " is undefined");
                          if(!(s instanceof t.Reflect.Message
                              .Field)) throw Error(this + "#" + e + " is not a field: " + s.toString(!0));
                          if(!s.repeated) throw Error(this + "#" + e + " is not a repeated field");
                          n = s.verifyValue(n, !0)
                        }
                        return null === this[e] && (this[e] = []), this[e].push(n), this
                      }, f.$add = f.add, f.set = function (e, n, r) {
                        var s, o, a;
                        if(
                          e && "object" == typeof e) {
                          for(s in r = n, e) e.hasOwnProperty(s) && void 0 !== (n = e[s]) && void 0 === i._oneofsByName[s] && this.$set(s, n,
                            r);
                          return this
                        }
                        if(o = i._fieldsByName[e], r) this[e] = n;
                        else {
                          if(!o) throw Error(this + "#" + e + " is not a field: undefined");
                          if(!(o instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e +
                            " is not a field: " + o.toString(!0));
                          this[o.name] = n = o.verifyValue(n)
                        }
                        return o && o.oneof && (a = this[o.oneof.name], null !== n ? (null !== a && a !== o.name && (this[a] = null), this[o
                          .oneof.name] = o.name) : a === e && (this[o.oneof.name] = null)), this
                      }, f.$set = f.set, f.get = function (e, n) {
                        if(n) return this[e];
                        var r = i
                          ._fieldsByName[e];
                        if(!(r && r instanceof t.Reflect.Message.Field)) throw Error(this + "#" + e + " is not a field: undefined");
                        if(!(r instanceof t.Reflect
                            .Message.Field)) throw Error(this + "#" + e + " is not a field: " + r.toString(!0));
                        return this[r.name]
                      }, f.$get = f.get, r = 0; r < o.length; r++)(s = o[
                      r]) instanceof t.Reflect.Message.ExtensionField || i.builder.options.populateAccessors && function (e) {
                      var t, n, r, s = e.originalName.replace(/(_[a-zA-Z])/g,
                        function (e) {
                          return e.toUpperCase()
                            .replace("_", "")
                        });
                      s = s.substring(0, 1)
                        .toUpperCase() + s.substring(1), t = e.originalName.replace(/([A-Z])/g, function (e) { return "_" + e }), n = function (t, i) {
                          return this[e.name] = i ? t :
                            e.verifyValue(t), this
                        }, r = function () { return this[e.name] }, null === i.getChild("set" + s) && (f["set" + s] = n), null === i.getChild("set_" +
                          t) && (f["set_" + t] = n), null === i.getChild("get" + s) && (f["get" + s] = r), null === i.getChild("get_" + t) && (f["get_" + t] = r)
                    }(s);
                    return f.encode = function (t, n) {
                        var r, s;
                        "boolean" == typeof t && (n = t, t = void 0), r = !1, t || (t = new e, r = !0), s = t.littleEndian;
                        try {
                          return i.encode(this, t.LE(), n), (r ? t.flip() : t)
                            .LE(s)
                        } catch (e) { throw t.LE(s), e }
                      }, l.encode = function (e, t, i) {
                        return new l(e)
                          .encode(t, i)
                      }, f.calculate = function () { return i.calculate(this) }, f.encodeDelimited = function (t, n) {
                        var r, s = !1;
                        return t || (t = new e, s = !0),
                          r = (new e)
                          .LE(), i.encode(this, r, n)
                          .flip(), t.writeVarint32(r.remaining()), t.append(r), s ? t.flip() : t
                      }, f.encodeAB = function () {
                        try {
                          return this.encode()
                            .toArrayBuffer()
                        } catch (e) { throw e.encoded && (e.encoded = e.encoded.toArrayBuffer()), e }
                      }, f.toArrayBuffer = f.encodeAB, f.encodeNB =
                      function () {
                        try {
                          return this.encode()
                            .toBuffer()
                        } catch (e) { throw e.encoded && (e.encoded = e.encoded.toBuffer()), e }
                      }, f.toBuffer = f.encodeNB, f.encode64 =
                      function () {
                        try {
                          return this.encode()
                            .toBase64()
                        } catch (e) { throw e.encoded && (e.encoded = e.encoded.toBase64()), e }
                      }, f.toBase64 = f.encode64, f.encodeHex =
                      function () {
                        try {
                          return this.encode()
                            .toHex()
                        } catch (e) { throw e.encoded && (e.encoded = e.encoded.toHex()), e }
                      }, f.toHex = f.encodeHex, f.toRaw = function (e, t) {
                        return n(this, !!e, !!
                          t, this.$type)
                      }, f.encodeJSON = function () { return JSON.stringify(n(this, !0, !0, this.$type)) }, l.decode = function (t, n, r) {
                        var s, o;
                        "string" ==
                        typeof n && (r = n, n = -1), "string" == typeof t ? t = e.wrap(t, r || "base64") : e.isByteBuffer(t) || (t = e.wrap(t)), s = t.littleEndian;
                        try {
                          return o = i
                            .decode(t.LE(), n), t.LE(s), o
                        } catch (e) { throw t.LE(s), e }
                      }, l.decodeDelimited = function (t, n) {
                        var r, s, o;
                        if("string" == typeof t ? t = e.wrap(
                            t, n || "base64") : e.isByteBuffer(t) || (t = e.wrap(t)), t.remaining() < 1) return null;
                        if(r = t.offset, s = t.readVarint32(), t.remaining() < s) return t
                          .offset = r, null;
                        try {
                          return o = i.decode(t.slice(t.offset, t.offset + s)
                            .LE()), t.offset += s, o
                        } catch (e) { throw t.offset += s, e }
                      }, l.decode64 = function (e) { return l.decode(e, "base64") }, l.decodeHex = function (
                        e) { return l.decode(e, "hex") }, l.decodeJSON = function (e) { return new l(JSON.parse(e)) }, f.toString = function () { return i.toString() }, Object
                      .defineProperty && (Object.defineProperty(l, "$options", { value: i.buildOpt() }), Object.defineProperty(f, "$options", { value: l.$options }), Object
                        .defineProperty(l, "$type", { value: i }), Object.defineProperty(f, "$type", { value: i })), l
                  }(t, this), this._fields = [], this._fieldsById = {}, this._fieldsByName = {}, this._oneofsByName = {}, r = 0, s = this.children.length; r < s; r++)
                  if((o = this.children[r]) instanceof c || o instanceof l || o instanceof m) {
                    if(n.hasOwnProperty(o.name)) throw Error("Illegal reflect child of " + this.toString(!
                      0) + ": " + o.toString(!0) + " cannot override static property '" + o.name + "'");
                    n[o.name] = o.build()
                  } else if(o instanceof l.Field) o.build(), this._fields.push(o), this._fieldsById[o.id] = o, this._fieldsByName[o.name] = o;
                else if(o instanceof l.OneOf) this._oneofsByName[o.name] = o;
                else if(!(o instanceof l.OneOf || o instanceof g)) throw Error("Illegal reflect child of " + this.toString(!0) + ": " + this.children[r].toString(!0));
                return this.clazz = n
              }, f.encode = function (e, t, i) {
                var n, r, s, o, a, l = null;
                for(r = 0, s = this._fields.length; r < s; ++r) o = e[(n = this._fields[r])
                  .name], n.required && null === o ? null === l && (l = n) : n.encode(i ? o : n.verifyValue(o), t, e);
                if(null !== l) throw (a = Error(
                    "Missing at least one required field for " + this.toString(!0) + ": " + l))
                  .encoded = t, a;
                return t
              }, f.calculate = function (e) {
                for(var t, i, n = 0, r = 0, s = this._fields.length; r < s; ++r) {
                  if(i = e[(t = this._fields[r])
                      .name], t.required && null === i) throw Error("Missing at least one required field for " + this.toString(!0) + ": " + t);
                  n += t.calculate(i, e)
                }
                return n
              }, f.decode = function (e, i, r) {
                var s, o, a, l, f, u, h, p, d, c, y, g;
                for("number" != typeof i && (i = -1), s = e.offset, o = new this.clazz; e.offset < s + i || -
                  1 === i && e.remaining() > 0;) {
                  if(f = (a = e.readVarint32()) >>> 3, (l = 7 & a) === t.WIRE_TYPES.ENDGROUP) {
                    if(f !== r) throw Error(
                      "Illegal group end indicator for " + this.toString(!0) + ": " + f + " (" + (r ? r + " expected" : "not a group") + ")");
                    break
                  }
                  if(u = this._fieldsById[f]) u
                    .repeated && !u.options.packed ? o[u.name].push(u.decode(l, e)) : u.map ? (p = u.decode(l, e), o[u.name].set(p[0], p[1])) : (o[u.name] = u.decode(l, e), u.oneof &&
                      (null !== (d = o[u.oneof.name]) && d !== u.name && (o[d] = null), o[u.oneof.name] = u.name));
                  else switch (l) {
                  case t.WIRE_TYPES.VARINT:
                    e.readVarint32();
                    break;
                  case t.WIRE_TYPES.BITS32:
                    e.offset += 4;
                    break;
                  case t.WIRE_TYPES.BITS64:
                    e.offset += 8;
                    break;
                  case t.WIRE_TYPES.LDELIM:
                    h = e.readVarint32(), e.offset += h;
                    break;
                  case t.WIRE_TYPES.STARTGROUP:
                    for(; n(f, e););
                    break;
                  default:
                    throw Error("Illegal wire type for unknown field " + f + " in " + this.toString(!0) + "#decode: " + l)
                  }
                }
                for(c = 0, y = this._fields.length; c < y; ++c)
                  if(null === o[(u = this._fields[c])
                      .name])
                    if("proto3" === this.syntax) o[u.name] = u.defaultValue;
                    else {
                      if(u.required) throw (g = Error("Missing at least one required field for " + this.toString(!0) + ": " + u.name))
                        .decoded = o, g;
                      t.populateDefaults && null !== u.defaultValue && (o[u.name] = u.defaultValue)
                    } return o
              }, w.Message = l, (h = (u = function (e, i, n, r, s, o, a, f, u, h) {
                  E
                    .call(this, e, i, o), this.className = "Message.Field", this.required = "required" === n, this.repeated = "repeated" === n, this.map = "map" === n, this.keyType =
                    r || null, this.type = s, this.resolvedType = null, this.id = a, this.options = f || {}, this.defaultValue = null, this.oneof = u || null, this.syntax = h ||
                    "proto2", this.originalName = this.name, this.element = null, this.keyElement = null, !this.builder.options.convertFieldsToCamelCase || this instanceof l
                    .ExtensionField || (this.name = t.Util.toCamelCase(this.name))
                })
                .prototype = Object.create(E.prototype))
              .build = function () {
                this.element = new o(this.type, this.resolvedType, !1, this.syntax, this.name), this.map && (this.keyElement = new o(this.keyType, void 0, !0, this
                  .syntax, this.name)), "proto3" !== this.syntax || this.repeated || this.map ? void 0 !== this.options.default && (this.defaultValue = this.verifyValue(this.options
                  .default)) : this.defaultValue = o.defaultFieldValue(this.type)
              }, h.verifyValue = function (e, i) {
                function n(e, t) { throw Error("Illegal value for " + r.toString(!0) + " of type " + r.type.name + ": " + e + " (" + t + ")") }
                var r, s, o;
                if(i = i || !1, r = this, null === e) return this.required && n(typeof e, "required"), "proto3" === this.syntax && this.type !== t.TYPES.message && n(typeof e,
                  "proto3 field without field presence cannot be null"), null;
                if(this.repeated && !i) { for(Array.isArray(e) || (e = [e]), o = [], s = 0; s < e.length; s++) o.push(this.element.verifyValue(e[s])); return o }
                return this.map && !i ? e instanceof t.Map ? e : (e instanceof Object || n(typeof e, "expected ProtoBuf.Map or raw object for map field"),
                  new t.Map(this, e)) : (!this.repeated && Array.isArray(e) && n(typeof e, "no array expected"), this.element.verifyValue(e))
              }, h.hasWirePresence = function (e, i) {
                if("proto3" !== this.syntax) return null !== e;
                if(this.oneof && i[this.oneof.name] === this.name) return !0;
                switch (this
                  .type) {
                case t.TYPES.int32:
                case t.TYPES.sint32:
                case t.TYPES.sfixed32:
                case t.TYPES.uint32:
                case t.TYPES.fixed32:
                  return 0 !== e;
                case t.TYPES.int64:
                case t.TYPES.sint64:
                case t.TYPES.sfixed64:
                case t.TYPES.uint64:
                case t.TYPES.fixed64:
                  return 0 !== e.low || 0 !== e.high;
                case t.TYPES.bool:
                  return e;
                case t.TYPES.float:
                case t.TYPES.double:
                  return 0 !== e;
                case t.TYPES.string:
                  return e.length > 0;
                case t.TYPES.bytes:
                  return e.remaining() > 0;
                case t.TYPES.enum:
                  return 0 !== e;
                case t.TYPES.message:
                  return null !== e;
                default:
                  return !0
                }
              }, h.encode = function (i, n, r) {
                var s, o, a, l, f;
                if(null === this.type || "object" != typeof this.type) throw Error(
                  "[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                if(null === i || this.repeated && 0 == i.length) return n;
                try {
                  if(this.repeated)
                    if(this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                      for(n.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), n.ensureCapacity(n
                          .offset += 1), o = n.offset, s = 0; s < i.length; s++) this.element.encodeValue(this.id, i[s], n);
                      a = n.offset - o, (l = e.calculateVarint32(a)) > 1 && (f = n.slice(o, n.offset), o += l - 1, n.offset = o, n.append(f)), n.writeVarint32(a, o - l)
                    } else
                      for(s = 0; s < i.length; s++) n.writeVarint32(this.id << 3 | this.type.wireType), this.element.encodeValue(this.id, i[s], n);
                  else this.map ? i.forEach(function (i, r, s) {
                    var o = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, r) + e.calculateVarint32(
                      16 | this.type.wireType) + this.element.calculateLength(2, i);
                    n.writeVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), n.writeVarint32(o), n.writeVarint32(8 | this.keyType.wireType), this.keyElement.encodeValue(1, r, n), n
                      .writeVarint32(16 | this.type.wireType), this.element.encodeValue(2, i, n)
                  }, this) : this.hasWirePresence(i, r) && (n.writeVarint32(this.id << 3 | this.type
                    .wireType), this.element.encodeValue(this.id, i, n))
                } catch (e) { throw Error("Illegal value for " + this.toString(!0) + ": " + i + " (" + e + ")") }
                return n
              }, h
              .calculate = function (i, n) {
                var r, s, o;
                if(i = this.verifyValue(i), null === this.type || "object" != typeof this.type) throw Error("[INTERNAL] Unresolved type in " + this.toString(!0) + ": " + this.type);
                if(null === i || this.repeated && 0 == i.length) return 0;
                r = 0;
                try {
                  if(this.repeated)
                    if(this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0) {
                      for(r += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), o = 0, s =
                        0; s < i.length; s++) o += this.element.calculateLength(this.id, i[s]);
                      r += e.calculateVarint32(o), r += o
                    } else
                      for(s = 0; s < i.length; s++) r += e.calculateVarint32(this.id << 3 | this.type.wireType), r += this.element.calculateLength(this.id, i[s]);
                  else this.map ? i.forEach(function (i, n, s) {
                    var o = e.calculateVarint32(8 | this.keyType.wireType) + this.keyElement.calculateLength(1, n) + e.calculateVarint32(16 | this.type.wireType) + this.element
                      .calculateLength(2, i);
                    r += e.calculateVarint32(this.id << 3 | t.WIRE_TYPES.LDELIM), r += e.calculateVarint32(o), r += o
                  }, this) : this.hasWirePresence(i, n) && (r += e.calculateVarint32(this.id << 3 | this.type.wireType), r += this.element.calculateLength(this.id, i))
                } catch (e) { throw Error("Illegal value for " + this.toString(!0) + ": " + i + " (" + e + ")") }
                return r
              }, h.decode = function (e, i, n) {
                var r, s, a, l, f, u, h, p = !this.map && e == this.type.wireType || !n && this.repeated && this.options.packed && e == t.WIRE_TYPES
                  .LDELIM || this.map && e == t.WIRE_TYPES.LDELIM;
                if(!p) throw Error("Illegal wire type for field " + this.toString(!0) + ": " + e + " (" + this.type.wireType +
                  " expected)");
                if(e == t.WIRE_TYPES.LDELIM && this.repeated && this.options.packed && t.PACKABLE_WIRE_TYPES.indexOf(this.type.wireType) >= 0 && !n) {
                  for(s = i
                    .readVarint32(), s = i.offset + s, a = []; i.offset < s;) a.push(this.decode(this.type.wireType, i, !0));
                  return a
                }
                if(this.map) {
                  if(l = o.defaultFieldValue(this
                      .keyType), r = o.defaultFieldValue(this.type), s = i.readVarint32(), i.remaining() < s) throw Error("Illegal number of bytes for " + this.toString(!0) + ": " +
                    s + " required but got only " + i.remaining());
                  for((f = i.clone())
                    .limit = f.offset + s, i.offset += s; f.remaining() > 0;)
                    if(e = 7 & (u = f.readVarint32()), 1 == (h = u >>> 3)) l = this.keyElement.decode(f, e, h);
                    else {
                      if(2 !== h) throw Error("Unexpected tag in map field key/value submessage");
                      r = this.element.decode(f, e, h)
                    } return [l, r]
                }
                return this.element.decode(i, e, this.id)
              }, w.Message.Field = u, (p = function (e, t, i, n, r, s, o) {
                u.call(
                  this, e, t, i, null, n, r, s, o), this.extension
              })
              .prototype = Object.create(u.prototype), w.Message.ExtensionField = p, d = function (e, t, i) { E.call(this, e, t, i), this.fields = [] }, w.Message.OneOf = d, (c =
                function (e, t, i, n, s) { r.call(this, e, t, i, n, s), this.className = "Enum", this.object = null })
              .getName = function (e, t) {
                var i, n, r = Object.keys(e);
                for(i = 0; i < r.length; ++i)
                  if(e[n = r[i]] === t) return n;
                return null
              }, (c.prototype = Object.create(r.prototype))
              .build = function (e) {
                var i, n, r, s;
                if(this.object && !e) return this.object;
                for(i = new t.Builder.Enum, r = 0, s = (n = this.getChildren(c.Value))
                  .length; r < s; ++r) i[n[r].name] = n[r].id;
                return Object.defineProperty && Object.defineProperty(i, "$options", { value: this.buildOpt(), enumerable: !1 }), this
                  .object = i
              }, w.Enum = c, (y = function (e, t, i, n) { E.call(this, e, t, i), this.className = "Enum.Value", this.id = n })
              .prototype = Object.create(E.prototype), w.Enum.Value = y, (g = function (e, t, i, n) { E.call(this, e, t, i), this.field = n })
              .prototype = Object.create(E.prototype), w.Extension = g, ((m = function (e, t, i, n) { r.call(this, e, t, i, n), this.className = "Service", this.clazz = null })
                .prototype = Object.create(r.prototype))
              .build = function (i) {
                return this.clazz && !i ? this.clazz : this.clazz = function (t, i) {
                  var n, r = function (e) {
                      t.Builder.Service.call(this), this.rpcImpl = e || function (e, t, i) {
                        setTimeout(i.bind(this, Error(
                          "Not implemented, see: https://github.com/dcodeIO/ProtoBuf.js/wiki/Services")), 0)
                      }
                    },
                    s = r.prototype = Object.create(t.Builder.Service.prototype),
                    o = i.getChildren(t.Reflect.Service.RPCMethod);
                  for(n = 0; n < o.length; n++) ! function (t) {
                    s[t.name] = function (n, r) {
                      try {
                        try { n = t.resolvedRequestType.clazz.decode(e.wrap(n)) } catch (e) { if(!(e instanceof TypeError)) throw e }
                        if(null === n || "object" != typeof n) throw Error("Illegal arguments");
                        n instanceof t.resolvedRequestType.clazz || (n = new t.resolvedRequestType.clazz(n)),
                          this.rpcImpl(t.fqn(), n, function (e, n) {
                            if(e) r(e);
                            else {
                              null === n && (n = "");
                              try { n = t.resolvedResponseType.clazz.decode(n) } catch (e) {} n && n instanceof t.resolvedResponseType.clazz ? r(
                                null, n) : r(Error("Illegal response type received in service method " + i.name + "#" + t.name))
                            }
                          })
                      } catch (e) { setTimeout(r.bind(this, e), 0) }
                    }, r[t.name] = function (e, i, n) { new r(e)[t.name](i, n) }, Object.defineProperty && (Object.defineProperty(r[t.name], "$options", { value: t.buildOpt() }),
                      Object.defineProperty(s[t.name], "$options", { value: r[t.name].$options }))
                  }(o[n]);
                  return Object.defineProperty && (Object.defineProperty(r, "$options", { value: i.buildOpt() }), Object.defineProperty(s, "$options", { value: r.$options }), Object
                    .defineProperty(r, "$type", { value: i }), Object.defineProperty(s, "$type", { value: i })), r
                }(t, this)
              }, w.Service = m, ((b = function (e, t, i, n) { E.call(this, e, t, i), this.className = "Service.Method", this.options = n || {} })
                .prototype = Object.create(E.prototype))
              .buildOpt = s.buildOpt, w.Service.Method = b, (v = function (e, t, i, n, r, s, o, a) {
                b.call(this, e, t, i, a), this.className = "Service.RPCMethod", this.requestName =
                  n, this.responseName = r, this.requestStream = s, this.responseStream = o, this.resolvedRequestType = null, this.resolvedResponseType = null
              })
              .prototype = Object.create(b.prototype), w.Service.RPCMethod = v, w
          }(s), s.Builder = function (e, t, n) {
            var r = function (e) {
                this.ns = new n.Namespace(this, null, ""), this.ptr = this.ns, this.resolved = !1, this.result = null, this.files = {}, this.importRoot = null, this
                  .options = e || {}
              },
              s = r.prototype;
            return r.isMessage = function (e) { return "string" == typeof e.name && void 0 === e.values && void 0 === e.rpc }, r.isMessageField = function (e) {
                return "string" ==
                  typeof e.rule && "string" == typeof e.name && "string" == typeof e.type && void 0 !== e.id
              }, r.isEnum = function (e) {
                return "string" == typeof e.name && !(
                  void 0 === e.values || !Array.isArray(e.values) || 0 === e.values.length)
              }, r.isService = function (e) {
                return !("string" != typeof e.name || "object" != typeof e
                  .rpc || !e.rpc)
              }, r.isExtend = function (e) { return "string" == typeof e.ref }, s.reset = function () { return this.ptr = this.ns, this }, s.define = function (
                e) {
                if("string" != typeof e || !t.TYPEREF.test(e)) throw Error("illegal namespace: " + e);
                return e.split(".")
                  .forEach(function (e) {
                    var t = this.ptr.getChild(e);
                    null === t && this.ptr.addChild(t = new n.Namespace(this, this.ptr, e)), this.ptr = t
                  }, this), this
              }, s.create = function (t) {
                var i, s, o, a, l;
                if(!t) return this;
                if(Array.isArray(t)) {
                  if(0 === t.length) return this;
                  t = t.slice()
                } else t = [t];
                for(i = [t]; i.length > 0;) {
                  if(t = i.pop(), !Array.isArray(t)) throw Error("not a valid namespace: " + JSON.stringify(t));
                  for(; t.length > 0;) {
                    if(s = t.shift(), r.isMessage(s)) {
                      if(o = new n.Message(this, this.ptr, s.name, s.options, s.isGroup, s.syntax), a = {}, s.oneofs && Object.keys(s.oneofs)
                        .forEach(function (e) { o.addChild(a[e] = new n.Message.OneOf(this, o, e)) }, this), s.fields && s.fields.forEach(function (e) {
                          if(null !== o.getChild(0 | e.id)) throw Error("duplicate or invalid field id in " + o.name + ": " + e.id);
                          if(e.options && "object" != typeof e.options) throw Error("illegal field options in " + o.name + "#" + e.name);
                          var t = null;
                          if("string" == typeof e.oneof && !(t = a[e.oneof])) throw Error("illegal oneof in " + o.name + "#" + e.name + ": " + e.oneof);
                          e = new n.Message.Field(this, o, e.rule, e.keytype, e.type, e.name, e.id, e.options, t, s.syntax), t && t.fields.push(e), o.addChild(e)
                        }, this), l = [], s.enums && s.enums.forEach(function (e) { l.push(e) }), s.messages && s.messages.forEach(function (e) { l.push(e) }), s.services && s.services
                        .forEach(function (e) { l.push(e) }), s.extensions && ("number" == typeof s.extensions[0] ? o.extensions = [s.extensions] : o.extensions = s.extensions), this
                        .ptr.addChild(o), l.length > 0) { i.push(t), t = l, l = null, this.ptr = o, o = null; continue } l = null
                    } else if(r.isEnum(s)) o = new n.Enum(this, this.ptr, s.name, s.options, s.syntax), s.values.forEach(function (e) {
                      o.addChild(new n.Enum.Value(this, o, e.name, e
                        .id))
                    }, this), this.ptr.addChild(o);
                    else if(r.isService(s)) o = new n.Service(this, this.ptr, s.name, s.options), Object.keys(s.rpc)
                      .forEach(function (e) {
                        var t = s.rpc[e];
                        o.addChild(new n.Service.RPCMethod(this, o, e, t.request, t.response, !!t.request_stream, !!t.response_stream, t.options))
                      }, this), this.ptr.addChild(o);
                    else {
                      if(!r.isExtend(s)) throw Error("not a valid definition: " + JSON.stringify(s));
                      if(o = this.ptr.resolve(s.ref, !0)) s.fields.forEach(function (t) {
                        var i, r,
                          s, a;
                        if(null !== o.getChild(0 | t.id)) throw Error("duplicate extended field id in " + o.name + ": " + t.id);
                        if(o.extensions && (i = !1, o.extensions
                            .forEach(function (e) { t.id >= e[0] && t.id <= e[1] && (i = !0) }), !i)) throw Error("illegal extended field id in " + o.name + ": " + t.id +
                          " (not within valid ranges)");
                        r = t.name, this.options.convertFieldsToCamelCase && (r = e.Util.toCamelCase(r)), s = new n.Message.ExtensionField(this, o, t.rule, t.type, this.ptr.fqn() +
                          "." + r, t.id, t.options), a = new n.Extension(this, this.ptr, t.name, s), s.extension = a, this.ptr.addChild(a), o.addChild(s)
                      }, this);
                      else if(!/\.?google\.protobuf\./.test(s.ref)) throw Error("extended message " + s.ref + " is not defined")
                    }
                    s = null, o = null
                  }
                  t = null, this.ptr = this.ptr.parent
                }
                return this.resolved = !1, this.result = null, this
              }, s.import = function (t, n) {
                var r, s, o, a, l, f, u, h, p = "/";
                if("string" == typeof n) {
                  if(e.Util.IS_NODE && (n = i(0)
                      .resolve(n)), !0 === this.files[n]) return this.reset();
                  this.files[n] = !0
                } else if("object" == typeof n) {
                  if(r = n.root, e.Util.IS_NODE && (r = i(0)
                      .resolve(r)), (r.indexOf("\\") >= 0 || n.file.indexOf("\\") >= 0) && (p = "\\"), s = e.Util.IS_NODE ? i(0)
                    .join(r, n.file) : r + p + n.file, !0 === this.files[s]) return this.reset();
                  this.files[s] = !0
                }
                if(t.imports && t.imports.length > 0) {
                  for(a = !1, "object" == typeof n ? (this.importRoot = n.root, a = !0, o = this.importRoot, n = n.file, (o.indexOf("\\") >= 0 || n.indexOf("\\") >= 0) && (p = "\\")) :
                    "string" == typeof n ? this.importRoot ? o = this.importRoot : n.indexOf("/") >= 0 ? "" === (o = n.replace(/\/[^\/]*$/, "")) && (o = "/") : n.indexOf("\\") >= 0 ? (
                      o = n.replace(/\\[^\\]*$/, ""), p = "\\") : o = "." : o = null, l = 0; l < t.imports.length; l++)
                    if("string" == typeof t.imports[l]) {
                      if(!o) throw Error("cannot determine import root");
                      if("google/protobuf/descriptor.proto" === (f = t.imports[l])) continue;
                      if(f = e.Util.IS_NODE ? i(0)
                        .join(o, f) : o + p + f, !0 === this.files[f]) continue;
                      if(/\.proto$/i.test(f) && !e.DotProto && (f = f.replace(/\.proto$/, ".json")), null === (u = e.Util.fetch(f))) throw Error("failed to import '" + f + "' in '" +
                        n + "': file not found");
                      /\.json$/i.test(f) ? this.import(JSON.parse(u + ""), f) : this.import(e.DotProto.Parser.parse(u), f)
                    } else n ? /\.(\w+)$/.test(n) ? this.import(t.imports[l], n.replace(/^(.+)\.(\w+)$/, function (e, t, i) { return t + "_import" + l + "." + i })) : this.import(t
                      .imports[l], n + "_import" + l) : this.import(t.imports[l]);
                  a && (this.importRoot = null)
                }
                return t.package && this.define(t.package), t.syntax && function e(t) {
                    t.messages && t.messages.forEach(function (i) { i.syntax = t.syntax, e(i) }), t.enums && t.enums
                      .forEach(function (e) { e.syntax = t.syntax })
                  }(t), h = this.ptr, t.options && Object.keys(t.options)
                  .forEach(function (e) { h.options[e] = t.options[e] }), t.messages && (this.create(t.messages), this.ptr = h), t.enums && (this.create(t.enums), this.ptr = h), t
                  .services && (this.create(t.services), this.ptr = h), t.extends && this.create(t.extends), this.reset()
              }, s.resolveAll = function () {
                var i;
                if(null == this.ptr || "object" == typeof this.ptr.type) return this;
                if(this.ptr instanceof n.Namespace) this.ptr.children
                  .forEach(function (e) { this.ptr = e, this.resolveAll() }, this);
                else if(this.ptr instanceof n.Message.Field) {
                  if(t.TYPE.test(this.ptr.type)) this.ptr.type = e.TYPES[this.ptr.type];
                  else {
                    if(!t.TYPEREF.test(this.ptr.type)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                    if(!(i = (this.ptr instanceof n
                          .Message.ExtensionField ? this.ptr.extension.parent : this.ptr.parent)
                        .resolve(this.ptr.type, !0))) throw Error("unresolvable type reference in " + this.ptr.toString(!0) + ": " + this.ptr.type);
                    if(this.ptr.resolvedType = i,
                      i instanceof n.Enum) {
                      if(this.ptr.type = e.TYPES.enum, "proto3" === this.ptr.syntax && "proto3" !== i.syntax) throw Error(
                        "proto3 message cannot reference proto2 enum")
                    } else {
                      if(!(i instanceof n.Message)) throw Error("illegal type reference in " + this.ptr.toString(!0) + ": " +
                        this.ptr.type);
                      this.ptr.type = i.isGroup ? e.TYPES.group : e.TYPES.message
                    }
                  }
                  if(this.ptr.map) {
                    if(!t.TYPE.test(this.ptr.keyType)) throw Error(
                      "illegal key type for map field in " + this.ptr.toString(!0) + ": " + this.ptr.keyType);
                    this.ptr.keyType = e.TYPES[this.ptr.keyType]
                  }
                  "proto3" === this.ptr.syntax && this.ptr.repeated && void 0 === this.ptr.options.packed && -1 !== e
                    .PACKABLE_WIRE_TYPES.indexOf(this.ptr.type.wireType) && (this.ptr.options.packed = !0)
                } else if(this.ptr instanceof e.Reflect.Service.Method) {
                  if(!(this
                      .ptr instanceof e.Reflect.Service.RPCMethod)) throw Error("illegal service type in " + this.ptr.toString(!0));
                  if(!((i = this.ptr.parent.resolve(this.ptr
                      .requestName, !0)) && i instanceof e.Reflect.Message)) throw Error("Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.requestName);
                  if(this
                    .ptr.resolvedRequestType = i, !((i = this.ptr.parent.resolve(this.ptr.responseName, !0)) && i instanceof e.Reflect.Message)) throw Error(
                    "Illegal type reference in " + this.ptr.toString(!0) + ": " + this.ptr.responseName);
                  this.ptr.resolvedResponseType = i
                } else if(!(this.ptr instanceof e.Reflect.Message.OneOf || this.ptr instanceof e.Reflect.Extension || this.ptr instanceof e.Reflect
                    .Enum.Value)) throw Error("illegal object in namespace: " + typeof this.ptr + ": " + this.ptr);
                return this.reset()
              }, s.build = function (e) {
                var t, i, n;
                if(this.reset(), this.resolved || (this.resolveAll(),
                    this.resolved = !0, this.result = null), null === this.result && (this.result = this.ns.build()), !e) return this.result;
                for(t = "string" == typeof e ? e.split(".") : e, i = this.result, n = 0; n < t.length; n++) { if(!i[t[n]]) { i = null; break } i = i[t[n]] }
                return i
              }, s.lookup = function (e, t) { return e ? this.ns.resolve(e, t) : this.ns }, s.toString = function () { return "Builder" }, r.Message = function () {}, r.Enum =
              function () {}, r.Service = function () {}, r
          }(s, s.Lang, s.Reflect), s.Map = function (e, t) {
            function i(e) { var t = 0; return { next: function () { return t < e.length ? { done: !1, value: e[t++] } : { done: !0 } } } }
            var n = function (e, i) {
                var n, r, s, o;
                if(
                  !e.map) throw Error("field is not a map");
                if(this.field = e, this.keyElem = new t.Element(e.keyType, null, !0, e.syntax), this.valueElem = new t.Element(e.type, e
                    .resolvedType, !1, e.syntax), this.map = {}, Object.defineProperty(this, "size", {
                    get: function () {
                      return Object.keys(this.map)
                        .length
                    }
                  }), i)
                  for(n = Object.keys(i), r = 0; r < n.length; r++) s = this.keyElem.valueFromString(n[r]), o = this.valueElem.verifyValue(i[n[r]]), this.map[this.keyElem
                    .valueToString(s)] = { key: s, value: o }
              },
              r = n.prototype;
            return r.clear = function () { this.map = {} }, r.delete = function (e) {
              var t = this.keyElem.valueToString(this.keyElem.verifyValue(e)),
                i = t in this.map;
              return delete this.map[t], i
            }, r.entries = function () {
              var e, t, n = [],
                r = Object.keys(this.map);
              for(e = 0; e < r.length; e++) n.push([(t = this.map[r[e]])
                .key, t.value
              ]);
              return i(n)
            }, r.keys = function () {
              var e, t = [],
                n = Object.keys(this.map);
              for(e = 0; e < n.length; e++) t.push(this.map[n[e]].key);
              return i(t)
            }, r.values = function () {
              var e, t = [],
                n = Object.keys(this.map);
              for(e = 0; e < n.length; e++) t.push(this.map[n[e]].value);
              return i(t)
            }, r.forEach = function (e, t) {
              var i, n, r = Object.keys(this
                .map);
              for(i = 0; i < r.length; i++) e.call(t, (n = this.map[r[i]])
                .value, n.key, this)
            }, r.set = function (e, t) {
              var i = this.keyElem.verifyValue(e),
                n = this.valueElem.verifyValue(t);
              return this.map[this.keyElem.valueToString(i)] = { key: i, value: n }, this
            }, r.get = function (e) {
              var t = this.keyElem
                .valueToString(this.keyElem.verifyValue(e));
              if(t in this.map) return this.map[t].value
            }, r.has = function (e) {
              return this.keyElem.valueToString(this.keyElem
                .verifyValue(e)) in this.map
            }, n
          }(0, s.Reflect), s.newBuilder = function (e) {
            return void 0 === (e = e || {})
              .convertFieldsToCamelCase && (e.convertFieldsToCamelCase = s.convertFieldsToCamelCase), void 0 === e.populateAccessors && (e.populateAccessors = s.populateAccessors),
              new s.Builder(e)
          }, s.loadJson = function (e, t, i) {
            return ("string" == typeof t || t && "string" == typeof t.file && "string" == typeof t.root) && (i = t, t = null),
              t && "object" == typeof t || (t = s.newBuilder()), "string" == typeof e && (e = JSON.parse(e)), t.import(e, i), t.resolveAll(), t
          }, s.loadJsonFile = function (e, t,
            i) {
            if(t && "object" == typeof t ? (i = t, t = null) : t && "function" == typeof t || (t = null), t) return s.Util.fetch("string" == typeof e ? e : e.root + "/" + e.file,
              function (n) { if(null !== n) try { t(null, s.loadJson(JSON.parse(n), i, e)) } catch (e) { t(e) } else t(Error("Failed to fetch file")) });
            var n = s.Util.fetch(
              "object" == typeof e ? e.root + "/" + e.file : e);
            return null === n ? null : s.loadJson(JSON.parse(n), i, e)
          }, s
      }) ? r.apply(t, s) : r) || (e.exports = o)
    })
    .call(this, i("8oxB"))
  },
  lxLC: function (e, t, i) {
    "use strict";
    e.exports = function () {
      var e = i("5iuW"),
        t = i("DPDv")
        .ByteBuffer;
      this._protobufTranslator = new e, this.set_data_quality = function () { return { quality: "low" } }, this.quote_create_session = function (e) { return { session: e } }, this
        .quote_delete_session = function (e) { return { session: e } }, this.quote_set_fields = function (e, t) { return { session: e, fields: JSON.stringify(t) } }, this.quote_add_symbols =
        function (e, t) { return { session: e, symbols: JSON.stringify(t) } }, this.quote_remove_symbols = function (e, t) { return { session: e, symbols: t } }, this.quote_fast_symbols =
        function (e, t) { return { session: e, symbols: "object" == typeof t ? JSON.stringify(t) : JSON.stringify([t]) } }, this.quote_hibernate_all = function (e) { return { session: e } },
        this.depth_create_session = function (e, t, i) { return { session: e, multiplier: t, viewport_width: i } }, this.depth_delete_session = function (e) { return { session: e } }, this
        .depth_set_symbol = function (e, t) { return { session: e, symbol: t } }, this.depth_clear_symbol = function (e) { return { session: e } }, this.depth_set_scale = function (e,
          t) { return { session: e, scale: t } }, this.chart_create_session = function (e, t) { return { session: e, parameters: t ? "disable_statistics" : "" } }, this.chart_delete_session =
        function (e) { return { session: e } }, this.set_auth_token = function (e) { return { token: e } }, this.switch_timezone = function (e, t) { return { session: e, timezone: t } },
        this.resolve_symbol = function (e, t, i) { return { session: e, resolve_name: t, symbol: i } }, this.create_series = function (e, t, i, n, r, s) {
          return {
            session: e,
            series_name: t,
            turnaround: i = i || "",
            resolve_name: n,
            resolution: r,
            bars: "object" == typeof s ? JSON.stringify(s) : JSON.stringify([s])
          }
        }, this.remove_series = function (
          e, t) { return { session: e, series_name: t } }, this.modify_series = function (e, t, i, n, r) {
          return {
            session: e,
            series_name: t,
            turnaround: i = i || "",
            resolve_name: n,
            resolution: r
          }
        }, this.request_more_data = function (e, t, i) { return { session: e, series_name: t, count: i } }, this.request_studies_metadata = function (e,
          t) { return { session: e, meta_name: t } }, this.create_study = function (e, i, n, r, s, o) {
          return {
            session: e,
            study_name: i,
            turnaround: n = n || "",
            parent: r,
            study: s,
            inputs: t.fromUTF8(JSON.stringify(o))
          }
        }, this.create_child_study = function (e, t, i, n, r, s) { return this.create_study(e, t, i, n, r, s) }, this.child_study_rebind =
        function (e, i, n, r, s, o) { return { session: e, study_name: i, turnaround: n = n || "", parent: r, study: s, inputs: t.fromUTF8(JSON.stringify(o)) } }, this.remove_study =
        function (e, t) { return { session: e, study_name: t } }, this.modify_study = function (e, i, n, r) {
          return {
            session: e,
            study_name: i,
            turnaround: n = n || "",
            inputs: t.fromUTF8(
              JSON.stringify(r))
          }
        }, this.create_pointset = function (e, t, i, n, r, s) {
          return {
            session: e,
            ps_name: t,
            turnaround: i = i || "",
            symbol: n,
            interval: r,
            points: JSON
              .stringify([s])
          }
        }, this.modify_pointset = function (e, t, i, n) { return { session: e, ps_name: t, turnaround: i = i || "", points: JSON.stringify([n]) } }, this
        .remove_pointset = function (e, t) { return { session: e, ps_name: t } }, this.request_more_tickmarks = function (e, t, i) { return { session: e, series_name: t, bars: i } }, this
        .get_first_bar_time = function (e, t, i) { return { session: e, symbol_name: t, resolution: i } }, this.replay_create_session = function (e) { return { session: e } }, this
        .replay_delete_session = function (e) { return { session: e } }, this.replay_reset = function (e, t, i) {
          return {
            session: e,
            time: i,
            turnaround: t
          }
        }, this.replay_start = function (e, t, i) { return { session: e, turnaround: t, delay: i } }, this.replay_stop = function (e, t) { return { session: e, turnaround: t } }, this
        .replay_step = function (e, t, i) { return { session: e, length: i, turnaround: t } }, this.replay_add_series = function (e, t, i, n) {
          return {
            session: e,
            symbol: i,
            resolution: n,
            turnaround: t
          }
        }, this.replay_remove_series = function (e, t, i, n) { return { session: e, symbol: i, resolution: n, turnaround: t } }, this.replay_set_resolution = function (e,
          t, i) { return { session: e, turnaround: t, resolution: i } }, this.convertTimescaleResponse = function (e) {
          var t, i, n = e.marks;
          for(t = 0; t < n.length; ++t) n[t] = {
            span: n[
              t].value[0],
            time: n[t].value[1],
            index: n[t].value[2]
          };
          if(void 0 !== e.index_diff)
            for(i = e.index_diff, t = 0; t < i.length; ++t) i[t] = { old: i[t].index[0], new: i[t].index[1] };
          else e.index_diff = [];
          return e
        }, this.getTimescaleObjects = function (e) { return e.params[1].series }, this.getTimescaleChangeset = function (e) { return e.params[0] }, this
        ._convertObjectToArray = function (e) {
          return Object.keys(e)
            .map(function (t) { return e[t] })
        }, this.prepareTimescaleUpdate = function (e, t, i) {
          t.forEach(function (t) {
            var n = { method: "data_update", params: t };
            i(e, t.customId, n)
          })
        }, this.prepareDataUpdate = function (e, t, i) {
          t.params[0].series.forEach(function (t) {
            var n, r, s;
            for(n in t.plots)
              for(r in t.plots[n].value) 1e100 === t.plots[n].value[r] && (t.plots[n].value[r] = void 0);
            s = { method: "data_update", params: t }, i(e, t.customId, s)
          })
        }, this.unpack = function (e) {
          function t(e) { return { v: e.volume, p: e.price } }
          var i, n, r, s, o, a;
          switch ((e = this._protobufTranslator.decode_message(e))
            .session = e.p.session, e.method = e.m, i = e.p, e.method) {
          case "symbol_resolved":
            e.p.symbol_info = JSON.parse(e.p.symbol_info), e.p = this._convertObjectToArray(e.p);
            break;
          case "studies_metadata":
            i.metadata = JSON.parse(i.metadata), e.p = this._convertObjectToArray(e.p);
            break;
          case "qsd":
            e.method = "quote_symbol_data", i.values ? i.values = JSON.parse(i.values) : (i.values = {}, ["lp", "ch", "chp", "high_price", "low_price", "volume", "rtc", "rch", "rchp", "bid",
                  "ask", "bid_size", "ask_size", "series_data"
                ].forEach(function (e) {
                  var t, n, r;
                  void 0 !== i[e] && null !== i[e] && (i.values[e] = "series_data" === e ? i[e] : "chp" === e || "rchp" === e ? (t = i[e], n = 4, r = Math.pow(10, n), Math.round(t * r) /
                    r) : i[e])
                }), n = JSON.parse(i.rest), Object.keys(n)
                .forEach(function (e) { i.values[e] = n[e] })), (r = { symbolname: i.symbol_name, status: i.status, values: i.values })
              .values.change = i.values.ch, r.values.last_price = i.values.lp, r.values.change_percent = i.values.chp, s = [i.session, r], e.p = s, e.params = e.p, delete i.values.ch,
              delete i.values.lp, delete i.values.chp;
            break;
          case "du":
            e.method = "data_update", i.objects.series.forEach(function (e) {
                e.data.forEach(function (e) { e.index = e.i, delete e.i, delete e.v }), e.plots = e.data, e.ns.d = "" === e.ns
                  .d ? "" : e.ns.d, e.ns.indexes = e.ns.nochange ? "nochange" : e.ns.indexes, e.nonseries = e.ns, e.customId = e.series_name, delete e.ns, delete e.data
              }), e.p = this
              ._convertObjectToArray(e.p);
            break;
          case "tickmark_update":
            o = { index: i.index, zoffset: i.zoffset, changes: i.changes, marks: i.marks }, s = [i.session, o], e.p = s;
            break;
          case "timescale_update":
            i.objects.series.forEach(function (e) {
              e.data.forEach(function (e) { e.index = e.i, delete e.i, delete e.v }),
                e.plots = e.data, e.ns.d = "" === e.ns.d ? "" : e.ns.d, e.ns.indexes = e.ns.nochange ? "nochange" : e.ns.indexes, e.nonseries = e.ns, e.customId = e.series_name, delete e
                .ns, delete e.data
            }), e.p = this._convertObjectToArray(e.p);
            break;
          case "dd":
            (i = i.depth_data)
            .asks = i.asks.map(t), i.bids = i.bids.map(t), e.p = this._convertObjectToArray(e.p);
            break;
          case "symbol_error":
            a = this._convertObjectToArray(i.reason), e.p = [i.session, i.symbol].concat(a);
            break;
          default:
            e.p = this._convertObjectToArray(e.p)
          }
          return e.params = e.p, e
        }, this.prepareEncodeMessage = function (e, t) { return this._protobufTranslator.encode_command(e, t) }
    }
  },
  yXba: function (e, t, i) {
    var n, r, s;
    r = [], void 0 === (s = "function" == typeof (n = function () {
      "use strict";

      function e(e, t, i) { this.low = 0 | e, this.high = 0 | t, this.unsigned = !!i }

      function t(e) { return !0 === (e && e.__isLong__) }

      function i(e, t) {
        var i, n, s;
        return t ? (s = 0 <= (e >>>= 0) && e < 256) && (n = l[e]) ? n : (i = r(e, (0 | e) < 0 ? -1 : 0, !0), s && (l[e] = i), i) : (s = -128 <= (e |= 0) &&
          e < 128) && (n = a[e]) ? n : (i = r(e, e < 0 ? -1 : 0, !1), s && (a[e] = i), i)
      }

      function n(e, t) {
        if(isNaN(e) || !isFinite(e)) return t ? g : y;
        if(t) { if(e < 0) return g; if(e >= p) return E } else {
          if(e <= -d) return _;
          if(e + 1 >= d)
            return w
        }
        return e < 0 ? n(-e, t)
          .neg() : r(e % h | 0, e / h | 0, t)
      }

      function r(t, i, n) { return new e(t, i, n) }

      function s(e, t, i) {
        var r, o, a, l, u, h, p;
        if(0 === e.length) throw Error("empty string");
        if("NaN" === e || "Infinity" === e || "+Infinity" === e || "-Infinity" === e)
          return y;
        if("number" == typeof t ? (i = t, t = !1) : t = !!t, (i = i || 10) < 2 || 36 < i) throw RangeError("radix");
        if((r = e.indexOf("-")) > 0) throw Error(
          "interior hyphen");
        if(0 === r) return s(e.substring(1), t, i)
          .neg();
        for(o = n(f(i, 8)), a = y, l = 0; l < e.length; l += 8) u = Math.min(8, e.length - l), h = parseInt(e.substring(l, l + u), i), u < 8 ? (p = n(f(i, u)), a = a.mul(p)
            .add(n(h))) : a = (a = a.mul(o))
          .add(n(h));
        return a.unsigned = t, a
      }

      function o(t) { return t instanceof e ? t : "number" == typeof t ? n(t) : "string" == typeof t ? s(t) : r(t.low, t.high, t.unsigned) }
      var a, l, f, u, h, p, d, c, y, g, m, b, v, w, E, _, T;
      return e.prototype.__isLong__, Object.defineProperty(e.prototype, "__isLong__", { value: !0, enumerable: !1, configurable: !1 }), e.isLong = t, a = {}, l = {}, e.fromInt = i, e
        .fromNumber = n, e.fromBits = r, f = Math.pow, e.fromString = s, e.fromValue = o, d = (p = (h = (u = 65536) * u) * h) / 2, c = i(1 << 24), y = i(0), e.ZERO = y, g = i(0, !0), e
        .UZERO = g, m = i(1), e.ONE = m, b = i(1, !0), e.UONE = b, v = i(-1), e.NEG_ONE = v, w = r(-1, 2147483647, !1), e.MAX_VALUE = w, E = r(-1, -1, !0), e.MAX_UNSIGNED_VALUE = E, _ =
        r(0, -2147483648, !1), e.MIN_VALUE = _, (T = e.prototype)
        .toInt = function () { return this.unsigned ? this.low >>> 0 : this.low }, T.toNumber = function () {
          return this.unsigned ? (this.high >>> 0) * h + (this.low >>> 0) : this
            .high * h + (this.low >>> 0)
        }, T.toString = function (e) {
          var t, i, r, s, o, a, l, u;
          if((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
          if(this.isZero())
            return "0";
          if(this.isNegative()) return this.eq(_) ? (t = n(e), r = (i = this.div(t))
              .mul(t)
              .sub(this), i.toString(e) + r.toInt()
              .toString(e)) : "-" + this.neg()
            .toString(e);
          for(s = n(f(e, 6), this.unsigned), o = this, a = "";;) {
            if(l = o.div(s), u = (o.sub(l.mul(s))
                .toInt() >>> 0)
              .toString(e), (o = l)
              .isZero()) return u + a;
            for(; u.length < 6;) u = "0" + u;
            a = "" + u + a
          }
        }, T.getHighBits = function () { return this.high }, T.getHighBitsUnsigned = function () { return this.high >>> 0 }, T.getLowBits = function () {
          return this
            .low
        },
        T.getLowBitsUnsigned = function () { return this.low >>> 0 }, T.getNumBitsAbs = function () {
          var e, t;
          if(this.isNegative()) return this.eq(_) ? 64 : this.neg()
            .getNumBitsAbs();
          for(e = 0 != this.high ? this.high : this.low, t = 31; t > 0 && 0 == (e & 1 << t); t--);
          return 0 != this.high ? t + 33 : t + 1
        }, T.isZero =
        function () { return 0 === this.high && 0 === this.low }, T.isNegative = function () { return !this.unsigned && this.high < 0 }, T.isPositive = function () {
          return this
            .unsigned || this.high >= 0
        }, T.isOdd = function () { return 1 == (1 & this.low) }, T.isEven = function () { return 0 == (1 & this.low) }, T.equals = function (
          e) { return t(e) || (e = o(e)), (this.unsigned === e.unsigned || this.high >>> 31 != 1 || e.high >>> 31 != 1) && this.high === e.high && this.low === e.low }, T.eq = T.equals, T
        .notEquals = function (e) { return !this.eq(e) }, T.neq = T.notEquals, T.lessThan = function (e) { return this.comp(e) < 0 }, T.lt = T.lessThan, T.lessThanOrEqual = function (
          e) { return this.comp(e) <= 0 }, T.lte = T.lessThanOrEqual, T.greaterThan = function (e) { return this.comp(e) > 0 }, T.gt = T.greaterThan, T.greaterThanOrEqual = function (
          e) { return this.comp(e) >= 0 }, T.gte = T.greaterThanOrEqual, T.compare = function (e) {
          if(t(e) || (e = o(e)), this.eq(e)) return 0;
          var i = this.isNegative(),
            n = e.isNegative();
          return i && !n ? -1 : !i && n ? 1 : this.unsigned ? e.high >>> 0 > this.high >>> 0 || e.high === this.high && e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this
            .sub(e)
            .isNegative() ? -1 : 1
        }, T.comp = T.compare, T.negate = function () {
          return !this.unsigned && this.eq(_) ? _ : this.not()
            .add(m)
        }, T.neg = T.negate, T.add = function (e) {
          var i, n, s, a, l, f, u, h, p, d, c;
          return t(e) || (e = o(e)), i = this.high >>> 16, n = 65535 & this.high, s = this
            .low >>> 16, a = 65535 & this.low, l = e.high >>> 16, f = 65535 & e.high, u = e.low >>> 16, h = 0, p = 0, d = 0, c = 0, d += (c += a + (65535 & e.low)) >>> 16, p += (d += s +
              u) >>> 16, h += (p += n + f) >>> 16, h += i + l, r((d &= 65535) << 16 | (c &= 65535), (h &= 65535) << 16 | (p &= 65535), this.unsigned)
        }, T.subtract = function (
          e) { return t(e) || (e = o(e)), this.add(e.neg()) }, T.sub = T.subtract, T.multiply = function (e) {
          var i, s, a, l, f, u, h, p, d, g, m, b;
          return this.isZero() ? y : (t(e) || (
              e = o(e)), e.isZero() ? y : this.eq(_) ? e.isOdd() ? _ : y : e.eq(_) ? this.isOdd() ? _ : y : this.isNegative() ? e.isNegative() ? this.neg()
            .mul(e.neg()) : this.neg()
            .mul(e)
            .neg() : e.isNegative() ? this.mul(e.neg())
            .neg() : this.lt(c) && e.lt(c) ? n(this.toNumber() * e.toNumber(), this.unsigned) : (i = this.high >>> 16, s = 65535 & this.high, a = this.low >>> 16, l = 65535 & this.low,
              f = e.high >>> 16, u = 65535 & e.high, h = e.low >>> 16, d = 0, g = 0, m = 0, b = 0, m += (b += l * (p = 65535 & e.low)) >>> 16, g += (m += a * p) >>> 16, m &= 65535,
              g += (m += l * h) >>> 16, d += (g += s * p) >>> 16, g &= 65535, d += (g += a * h) >>> 16, g &= 65535, d += (g += l * u) >>> 16, d += i * p + s * h + a * u + l * f, r((
                m &= 65535) << 16 | (b &= 65535), (d &= 65535) << 16 | (g &= 65535), this.unsigned)))
        }, T.mul = T.multiply, T.divide = function (e) {
          var i, r, s, a, l, u, h;
          if(t(e) || (e = o(e)), e.isZero()) throw Error("division by zero");
          if(this.isZero()) return this.unsigned ? g : y;
          if(this.unsigned) {
            if(e.unsigned || (e = e.toUnsigned()), e.gt(this)) return g;
            if(e.gt(this.shru(1))) return b;
            s = g
          } else {
            if(this.eq(_)) return e.eq(m) || e.eq(v) ? _ : e.eq(_) ? m : (i = this.shr(1)
                .div(e)
                .shl(1))
              .eq(y) ? e.isNegative() ? m : v : (r = this.sub(e.mul(i)), s = i.add(r.div(e)));
            if(e.eq(_)) return this.unsigned ? g : y;
            if(this.isNegative()) return e.isNegative() ? this.neg()
              .div(e.neg()) : this.neg()
              .div(e)
              .neg();
            if(e.isNegative()) return this.div(e.neg())
              .neg();
            s = y
          }
          for(r = this; r.gte(e);) {
            for(i = Math.max(1, Math.floor(r.toNumber() / e.toNumber())), l = (a = Math.ceil(Math.log(i) / Math.LN2)) <= 48 ? 1 : f(2, a - 48), h = (u = n(i))
              .mul(e); h.isNegative() || h.gt(r);) h = (u = n(i -= l, this.unsigned))
              .mul(e);
            u.isZero() && (u = m), s = s.add(u), r = r.sub(h)
          }
          return s
        }, T.div = T.divide, T.modulo = function (e) {
          return t(e) || (e = o(e)), this.sub(this.div(e)
            .mul(e))
        }, T.mod = T.modulo, T.not = function () { return r(~this.low, ~this.high, this.unsigned) }, T.and = function (e) {
          return t(e) || (e = o(e)), r(this.low & e.low,
            this.high & e.high, this.unsigned)
        }, T.or = function (e) { return t(e) || (e = o(e)), r(this.low | e.low, this.high | e.high, this.unsigned) }, T.xor = function (
          e) { return t(e) || (e = o(e)), r(this.low ^ e.low, this.high ^ e.high, this.unsigned) }, T.shiftLeft = function (e) {
          return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e <
            32 ? r(this.low << e, this.high << e | this.low >>> 32 - e, this.unsigned) : r(0, this.low << e - 32, this.unsigned)
        }, T.shl = T.shiftLeft, T.shiftRight = function (
          e) {
          return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : e < 32 ? r(this.low >>> e | this.high << 32 - e, this.high >> e, this.unsigned) : r(this.high >> e - 32, this.high >=
            0 ? 0 : -1, this.unsigned)
        }, T.shr = T.shiftRight, T.shiftRightUnsigned = function (e) {
          var i;
          return t(e) && (e = e.toInt()), 0 == (e &= 63) ? this : (i = this.high, e <
            32 ? r(this.low >>> e | i << 32 - e, i >>> e, this.unsigned) : r(32 === e ? i : i >>> e - 32, 0, this.unsigned))
        }, T.shru = T.shiftRightUnsigned, T.toSigned =
        function () { return this.unsigned ? r(this.low, this.high, !1) : this }, T.toUnsigned = function () { return this.unsigned ? this : r(this.low, this.high, !0) }, T.toBytes =
        function (e) { return e ? this.toBytesLE() : this.toBytesBE() }, T.toBytesLE = function () {
          var e = this.high,
            t = this.low;
          return [255 & t, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255, 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255]
        }, T.toBytesBE = function () {
          var e =
            this.high,
            t = this.low;
          return [e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e, t >>> 24 & 255, t >>> 16 & 255, t >>> 8 & 255, 255 & t]
        }, e
    }) ? n.apply(t, r) : n) || (e.exports = s)
  }
}
module.exports = a;