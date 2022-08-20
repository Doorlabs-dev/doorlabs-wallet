export default `{
  "abi": [
    {
      "inputs": [
        { "name": "implementation", "type": "felt" },
        { "name": "selector", "type": "felt" },
        { "name": "calldata_len", "type": "felt" },
        { "name": "calldata", "type": "felt*" }
      ],
      "name": "constructor",
      "outputs": [],
      "type": "constructor"
    },
    {
      "inputs": [
        { "name": "selector", "type": "felt" },
        { "name": "calldata_size", "type": "felt" },
        { "name": "calldata", "type": "felt*" }
      ],
      "name": "__default__",
      "outputs": [
        { "name": "retdata_size", "type": "felt" },
        { "name": "retdata", "type": "felt*" }
      ],
      "type": "function"
    },
    {
      "inputs": [
        { "name": "selector", "type": "felt" },
        { "name": "calldata_size", "type": "felt" },
        { "name": "calldata", "type": "felt*" }
      ],
      "name": "__l1_default__",
      "outputs": [],
      "type": "l1_handler"
    },
    {
      "inputs": [],
      "name": "get_implementation",
      "outputs": [{ "name": "implementation", "type": "felt" }],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "entry_points_by_type": {
    "CONSTRUCTOR": [
      {
        "offset": "0x6c",
        "selector": "0x28ffe4ff0f226a9107253e17a904099aa4f63a02a5621de0576e5aa71bc5194"
      }
    ],
    "EXTERNAL": [
      { "offset": "0x9b", "selector": "0x0" },
      {
        "offset": "0xd4",
        "selector": "0x21691762da057c1b71f851f9b709e0c143628acf6e0cbc9735411a65663d747"
      }
    ],
    "L1_HANDLER": [{ "offset": "0xb4", "selector": "0x0" }]
  },
  "program": {
    "attributes": [],
    "builtins": ["pedersen", "range_check"],
    "data": [
      "0x20780017fff7ffd",
      "0x4",
      "0x400780017fff7ffd",
      "0x1",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x4c69627261727943616c6c",
      "0x400280007ff97fff",
      "0x400380017ff97ffa",
      "0x400380027ff97ffb",
      "0x400380037ff97ffc",
      "0x400380047ff97ffd",
      "0x482680017ff98000",
      "0x7",
      "0x480280057ff98000",
      "0x480280067ff98000",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x4c69627261727943616c6c4c3148616e646c6572",
      "0x400280007ff97fff",
      "0x400380017ff97ffa",
      "0x400380027ff97ffb",
      "0x400380037ff97ffc",
      "0x400380047ff97ffd",
      "0x482680017ff98000",
      "0x7",
      "0x480280057ff98000",
      "0x480280067ff98000",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x53746f7261676552656164",
      "0x400280007ffc7fff",
      "0x400380017ffc7ffd",
      "0x482680017ffc8000",
      "0x3",
      "0x480280027ffc8000",
      "0x208b7fff7fff7ffe",
      "0x480680017fff8000",
      "0x53746f726167655772697465",
      "0x400280007ffb7fff",
      "0x400380017ffb7ffc",
      "0x400380027ffb7ffd",
      "0x482680017ffb8000",
      "0x3",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x480680017fff8000",
      "0xf920571b9f85bdd92a867cfdc73319d0f8836f0e69e06e4c5566b6203f75cc",
      "0x208b7fff7fff7ffe",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffffa",
      "0x480a7ffb7fff8000",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe6",
      "0x48127ffe7fff8000",
      "0x48127ff57fff8000",
      "0x48127ff57fff8000",
      "0x48127ffc7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffed",
      "0x480a7ffa7fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe0",
      "0x48127ff67fff8000",
      "0x48127ff67fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe5",
      "0x208b7fff7fff7ffe",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffaf",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe8",
      "0x208b7fff7fff7ffe",
      "0x480a7ff77fff8000",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff3",
      "0x48127ffd7fff8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa0",
      "0x48127ffd7fff8000",
      "0x48127ff27fff8000",
      "0x48127ff27fff8000",
      "0x208b7fff7fff7ffe",
      "0x480280027ffb8000",
      "0x480280027ffd8000",
      "0x400080007ffe7fff",
      "0x482680017ffd8000",
      "0x3",
      "0x480280027ffd8000",
      "0x48307fff7ffe8000",
      "0x402a7ffd7ffc7fff",
      "0x480280027ffb8000",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x482480017ffd8000",
      "0x1",
      "0x480280007ffd8000",
      "0x480280017ffd8000",
      "0x480280027ffd8000",
      "0x482680017ffd8000",
      "0x3",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffde",
      "0x40780017fff7fff",
      "0x1",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x480680017fff8000",
      "0x0",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffc0",
      "0x48127ffc7fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff73",
      "0x48127ffd7fff8000",
      "0x48127ff17fff8000",
      "0x48127ff17fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffe9",
      "0x208b7fff7fff7ffe",
      "0x480a7ff87fff8000",
      "0x480a7ff97fff8000",
      "0x480a7ffa7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffa5",
      "0x48127ffc7fff8000",
      "0x48127ffe7fff8000",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff64",
      "0x48127ffd7fff8000",
      "0x48127ff17fff8000",
      "0x48127ff17fff8000",
      "0x208b7fff7fff7ffe",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x480a7ffa7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffeb",
      "0x40780017fff7fff",
      "0x1",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x48127ffc7fff8000",
      "0x480680017fff8000",
      "0x0",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe",
      "0x480a7ffb7fff8000",
      "0x480a7ffc7fff8000",
      "0x480a7ffd7fff8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffff84",
      "0x208b7fff7fff7ffe",
      "0x40780017fff7fff",
      "0x1",
      "0x4003800080007ffc",
      "0x4826800180008000",
      "0x1",
      "0x480a7ffd7fff8000",
      "0x4828800080007ffe",
      "0x480a80007fff8000",
      "0x208b7fff7fff7ffe",
      "0x402b7ffd7ffc7ffd",
      "0x480280007ffb8000",
      "0x480280017ffb8000",
      "0x480280027ffb8000",
      "0x1104800180018000",
      "0x800000000000010ffffffffffffffffffffffffffffffffffffffffffffffee",
      "0x48127ffe7fff8000",
      "0x1104800180018000",
      "0x800000000000010fffffffffffffffffffffffffffffffffffffffffffffff1",
      "0x48127ff47fff8000",
      "0x48127ff47fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x48127ffb7fff8000",
      "0x208b7fff7fff7ffe"
    ],
    "debug_info": {
      "file_contents": {
        "autogen/starknet/arg_processor/16776347bfc3c84718728a7d5c6c2189ac0c5f697db91093bdb9d32707f1b476.cairo": "let __calldata_arg_selector = [__calldata_ptr]\nlet __calldata_ptr = __calldata_ptr + 1\n",
        "autogen/starknet/arg_processor/1b562308a65653425ce06491fa4b4539466f3251a07e73e099d0afe86a48900e.cairo": "assert [cast(fp + (-4), felt*)] = __calldata_actual_size\n",
        "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo": "# Check that the length is non-negative.\nassert [range_check_ptr] = __calldata_arg_calldata_len\nlet range_check_ptr = range_check_ptr + 1\n# Create the reference.\nlet __calldata_arg_calldata = cast(__calldata_ptr, felt*)\n# Use 'tempvar' instead of 'let' to avoid repeating this computation for the\n# following arguments.\ntempvar __calldata_ptr = __calldata_ptr + __calldata_arg_calldata_len * 1\n",
        "autogen/starknet/arg_processor/8799496fe2567340f6719cfd30d7db5f6b8e7aa420ca97e3a3c3ccbdfbb2e674.cairo": "let __calldata_arg_calldata_len = [__calldata_ptr]\nlet __calldata_ptr = __calldata_ptr + 1\n",
        "autogen/starknet/arg_processor/a92ee64e63c8bb0f2c3274f545a28084ca932cab47041624c23a318feb373118.cairo": "assert [__return_value_ptr] = ret_value.implementation\nlet __return_value_ptr = __return_value_ptr + 1\n",
        "autogen/starknet/arg_processor/c69461d344491abf07eb0383530bb5331fa0198033b30813dc78971c560b1834.cairo": "let __calldata_arg_implementation = [__calldata_ptr]\nlet __calldata_ptr = __calldata_ptr + 1\n",
        "autogen/starknet/external/__default__/424b26e79f70343cc02557f1fbd25745138efb26a3dc5c8b593ca765b73138b7.cairo": "let pedersen_ptr = [cast([cast(fp + (-5), felt**)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]\n",
        "autogen/starknet/external/__default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo": "return (syscall_ptr,pedersen_ptr,range_check_ptr,retdata_size,retdata)\n",
        "autogen/starknet/external/__default__/594cfed774c45850575554a78093a7a27edf1e635eae6c967f967cde5f6d9051.cairo": "let ret_value = __wrapped_func{syscall_ptr=syscall_ptr, pedersen_ptr=pedersen_ptr, range_check_ptr=range_check_ptr}(selector=[cast(fp + (-6), felt*)], calldata_size=[cast(fp + (-4), felt*)], calldata=[cast(fp + (-3), felt**)],)\nlet retdata_size = ret_value.retdata_size\nlet retdata = ret_value.retdata\n",
        "autogen/starknet/external/__default__/c7060df96cb0acca1380ae43bf758cab727bfdf73cb5d34a93e24a9742817fda.cairo": "let syscall_ptr = [cast([cast(fp + (-5), felt**)] + 0, felt**)]\n",
        "autogen/starknet/external/__default__/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo": "let range_check_ptr = [cast([cast(fp + (-5), felt**)] + 2, felt*)]\n",
        "autogen/starknet/external/__l1_default__/424b26e79f70343cc02557f1fbd25745138efb26a3dc5c8b593ca765b73138b7.cairo": "let pedersen_ptr = [cast([cast(fp + (-5), felt**)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]\n",
        "autogen/starknet/external/__l1_default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo": "return (syscall_ptr,pedersen_ptr,range_check_ptr,retdata_size,retdata)\n",
        "autogen/starknet/external/__l1_default__/c7060df96cb0acca1380ae43bf758cab727bfdf73cb5d34a93e24a9742817fda.cairo": "let syscall_ptr = [cast([cast(fp + (-5), felt**)] + 0, felt**)]\n",
        "autogen/starknet/external/__l1_default__/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo": "let range_check_ptr = [cast([cast(fp + (-5), felt**)] + 2, felt*)]\n",
        "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo": "let ret_value = __wrapped_func{syscall_ptr=syscall_ptr, pedersen_ptr=pedersen_ptr, range_check_ptr=range_check_ptr}(selector=[cast(fp + (-6), felt*)], calldata_size=[cast(fp + (-4), felt*)], calldata=[cast(fp + (-3), felt**)],)\n%{ memory[ap] = segments.add() %}        # Allocate memory for return value.\ntempvar retdata : felt*\nlet retdata_size = 0\n",
        "autogen/starknet/external/constructor/424b26e79f70343cc02557f1fbd25745138efb26a3dc5c8b593ca765b73138b7.cairo": "let pedersen_ptr = [cast([cast(fp + (-5), felt**)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]\n",
        "autogen/starknet/external/constructor/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo": "return (syscall_ptr,pedersen_ptr,range_check_ptr,retdata_size,retdata)\n",
        "autogen/starknet/external/constructor/c7060df96cb0acca1380ae43bf758cab727bfdf73cb5d34a93e24a9742817fda.cairo": "let syscall_ptr = [cast([cast(fp + (-5), felt**)] + 0, felt**)]\n",
        "autogen/starknet/external/constructor/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo": "let range_check_ptr = [cast([cast(fp + (-5), felt**)] + 2, felt*)]\n",
        "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo": "let ret_value = __wrapped_func{syscall_ptr=syscall_ptr, pedersen_ptr=pedersen_ptr, range_check_ptr=range_check_ptr}(implementation=__calldata_arg_implementation, selector=__calldata_arg_selector, calldata_len=__calldata_arg_calldata_len, calldata=__calldata_arg_calldata,)\n%{ memory[ap] = segments.add() %}        # Allocate memory for return value.\ntempvar retdata : felt*\nlet retdata_size = 0\n",
        "autogen/starknet/external/get_implementation/424b26e79f70343cc02557f1fbd25745138efb26a3dc5c8b593ca765b73138b7.cairo": "let pedersen_ptr = [cast([cast(fp + (-5), felt**)] + 1, starkware.cairo.common.cairo_builtins.HashBuiltin**)]\n",
        "autogen/starknet/external/get_implementation/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo": "return (syscall_ptr,pedersen_ptr,range_check_ptr,retdata_size,retdata)\n",
        "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo": "let ret_value = __wrapped_func{syscall_ptr=syscall_ptr, pedersen_ptr=pedersen_ptr, range_check_ptr=range_check_ptr}()\nlet (range_check_ptr, retdata_size, retdata) = get_implementation_encode_return(ret_value, range_check_ptr)\n",
        "autogen/starknet/external/get_implementation/c7060df96cb0acca1380ae43bf758cab727bfdf73cb5d34a93e24a9742817fda.cairo": "let syscall_ptr = [cast([cast(fp + (-5), felt**)] + 0, felt**)]\n",
        "autogen/starknet/external/get_implementation/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo": "let range_check_ptr = [cast([cast(fp + (-5), felt**)] + 2, felt*)]\n",
        "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo": "func get_implementation_encode_return(ret_value : (implementation : felt), range_check_ptr) -> (\n        range_check_ptr, data_len : felt, data : felt*):\n    %{ memory[ap] = segments.add() %}\n    alloc_locals\n    local __return_value_ptr_start : felt*\n    let __return_value_ptr = __return_value_ptr_start\n    with range_check_ptr:\n    end\n    return (\n        range_check_ptr=range_check_ptr,\n        data_len=__return_value_ptr - __return_value_ptr_start,\n        data=__return_value_ptr_start)\nend\n",
        "autogen/starknet/storage_var/_implementation/decl.cairo": "namespace _implementation:\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (res : felt):\n        let res = 0\n        call hash2\n        call normalize_address\n    end\n\n    func read{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (\n        address : felt\n    ):\n        let storage_addr = 0\n        call addr\n        call storage_read\n    end\n\n    func write{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(value : felt):\n        let storage_addr = 0\n        call addr\n        call storage_write\n    end\nend",
        "autogen/starknet/storage_var/_implementation/impl.cairo": "namespace _implementation:\n    from starkware.starknet.common.storage import normalize_address\n    from starkware.starknet.common.syscalls import storage_read, storage_write\n    from starkware.cairo.common.cairo_builtins import HashBuiltin\n    from starkware.cairo.common.hash import hash2\n\n    func addr{pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (res : felt):\n        let res = 440168123437330633874675177419976431975019168943402176995739208264668116428\n        return (res=res)\n    end\n\n    func read{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}() -> (\n        address : felt\n    ):\n        let (storage_addr) = addr()\n        let (__storage_var_temp0) = storage_read(address=storage_addr + 0)\n\n        tempvar syscall_ptr = syscall_ptr\n        tempvar pedersen_ptr = pedersen_ptr\n        tempvar range_check_ptr = range_check_ptr\n        tempvar __storage_var_temp0 : felt = __storage_var_temp0\n        return ([cast(&__storage_var_temp0, felt*)])\n    end\n\n    func write{syscall_ptr : felt*, pedersen_ptr : HashBuiltin*, range_check_ptr}(value : felt):\n        let (storage_addr) = addr()\n        storage_write(address=storage_addr + 0, value=[cast(&value, felt) + 0])\n        return ()\n    end\nend"
      },
      "instruction_locations": {
        "0": {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_not_zero"
          ],
          "flow_tracking_data": null,
          "hints": [
            {
              "location": {
                "end_col": 7,
                "end_line": 9,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/cairo/common/math.cairo"
                },
                "start_col": 5,
                "start_line": 5
              },
              "n_prefix_newlines": 1
            }
          ],
          "inst": {
            "end_col": 7,
            "end_line": 10,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/cairo/common/math.cairo"
            },
            "start_col": 5,
            "start_line": 10
          }
        },
        "2": {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_not_zero"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 18,
            "end_line": 12,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/cairo/common/math.cairo"
            },
            "start_col": 9,
            "start_line": 12
          }
        },
        "4": {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_not_zero"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 14,
            "end_line": 15,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/cairo/common/math.cairo"
            },
            "start_col": 5,
            "start_line": 15
          }
        },
        "5": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 39,
            "end_line": 89,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 18,
            "start_line": 89
          }
        },
        "7": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 93,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 88
          }
        },
        "8": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 93,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 88
          }
        },
        "9": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 93,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 88
          }
        },
        "10": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 93,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 88
          }
        },
        "11": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 93,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 88
          }
        },
        "12": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [
            {
              "location": {
                "end_col": 87,
                "end_line": 94,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "start_col": 5,
                "start_line": 94
              },
              "n_prefix_newlines": 0
            }
          ],
          "inst": {
            "end_col": 53,
            "end_line": 97,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "parent_location": [
              {
                "end_col": 38,
                "end_line": 84,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 74,
                    "end_line": 98,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                    },
                    "start_col": 5,
                    "start_line": 98
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 19,
                "start_line": 84
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 23,
            "start_line": 97
          }
        },
        "14": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 47,
            "end_line": 98,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 26,
            "start_line": 98
          }
        },
        "15": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 73,
            "end_line": 98,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 57,
            "start_line": 98
          }
        },
        "16": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 74,
            "end_line": 98,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 98
          }
        },
        "17": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 50,
            "end_line": 110,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 18,
            "start_line": 110
          }
        },
        "19": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 114,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 109
          }
        },
        "20": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 114,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 109
          }
        },
        "21": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 114,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 109
          }
        },
        "22": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 114,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 109
          }
        },
        "23": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 114,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 109
          }
        },
        "24": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [
            {
              "location": {
                "end_col": 98,
                "end_line": 115,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "start_col": 5,
                "start_line": 115
              },
              "n_prefix_newlines": 0
            }
          ],
          "inst": {
            "end_col": 53,
            "end_line": 118,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "parent_location": [
              {
                "end_col": 49,
                "end_line": 105,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 74,
                    "end_line": 119,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                    },
                    "start_col": 5,
                    "start_line": 119
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 30,
                "start_line": 105
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 23,
            "start_line": 118
          }
        },
        "26": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 47,
            "end_line": 119,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 26,
            "start_line": 119
          }
        },
        "27": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 73,
            "end_line": 119,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 57,
            "start_line": 119
          }
        },
        "28": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 74,
            "end_line": 119,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 119
          }
        },
        "29": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 79,
            "end_line": 348,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 58,
            "start_line": 348
          }
        },
        "31": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 97,
            "end_line": 348,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 348
          }
        },
        "32": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 97,
            "end_line": 348,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 348
          }
        },
        "33": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_read"
          ],
          "flow_tracking_data": null,
          "hints": [
            {
              "location": {
                "end_col": 87,
                "end_line": 349,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "start_col": 5,
                "start_line": 349
              },
              "n_prefix_newlines": 0
            }
          ],
          "inst": {
            "end_col": 53,
            "end_line": 351,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "parent_location": [
              {
                "end_col": 38,
                "end_line": 346,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 34,
                    "end_line": 352,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                    },
                    "start_col": 5,
                    "start_line": 352
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 19,
                "start_line": 346
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 23,
            "start_line": 351
          }
        },
        "35": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 33,
            "end_line": 352,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 19,
            "start_line": 352
          }
        },
        "36": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 34,
            "end_line": 352,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 352
          }
        },
        "37": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 40,
            "end_line": 366,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 18,
            "start_line": 366
          }
        },
        "39": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 71,
            "end_line": 366,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 365
          }
        },
        "40": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 71,
            "end_line": 366,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 365
          }
        },
        "41": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 71,
            "end_line": 366,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 365
          }
        },
        "42": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_write"
          ],
          "flow_tracking_data": null,
          "hints": [
            {
              "location": {
                "end_col": 88,
                "end_line": 367,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "start_col": 5,
                "start_line": 367
              },
              "n_prefix_newlines": 0
            }
          ],
          "inst": {
            "end_col": 54,
            "end_line": 368,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "parent_location": [
              {
                "end_col": 39,
                "end_line": 364,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 14,
                    "end_line": 369,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                    },
                    "start_col": 5,
                    "start_line": 369
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 20,
                "start_line": 364
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 23,
            "start_line": 368
          }
        },
        "44": {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 14,
            "end_line": 369,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "start_col": 5,
            "start_line": 369
          }
        },
        "45": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.addr"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 42,
            "end_line": 7,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 42,
                "end_line": 7,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 25,
                    "end_line": 9,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 9,
                    "start_line": 9
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 15,
                "start_line": 7
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 15,
            "start_line": 7
          }
        },
        "46": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.addr"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 59,
            "end_line": 7,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 59,
                "end_line": 7,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 25,
                    "end_line": 9,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 9,
                    "start_line": 9
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 44,
                "start_line": 7
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 44,
            "start_line": 7
          }
        },
        "47": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.addr"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 94,
            "end_line": 8,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 9,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "start_col": 21,
                "start_line": 9
              },
              "While expanding the reference 'res' in:"
            ],
            "start_col": 19,
            "start_line": 8
          }
        },
        "49": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.addr"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 25,
            "end_line": 9,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "start_col": 9,
            "start_line": 9
          }
        },
        "50": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 63,
            "end_line": 12,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 42,
                "end_line": 7,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 36,
                    "end_line": 15,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 30,
                    "start_line": 15
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 15,
                "start_line": 7
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 36,
            "start_line": 12
          }
        },
        "51": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 80,
            "end_line": 12,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 59,
                "end_line": 7,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 36,
                    "end_line": 15,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 30,
                    "start_line": 15
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 44,
                "start_line": 7
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 65,
            "start_line": 12
          }
        },
        "52": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 36,
            "end_line": 15,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "start_col": 30,
            "start_line": 15
          }
        },
        "54": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 34,
            "end_line": 12,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 38,
                "end_line": 346,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 75,
                    "end_line": 16,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 37,
                    "start_line": 16
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 19,
                "start_line": 346
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 15,
            "start_line": 12
          }
        },
        "55": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 26,
            "end_line": 15,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 70,
                "end_line": 16,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "start_col": 58,
                "start_line": 16
              },
              "While expanding the reference 'storage_addr' in:"
            ],
            "start_col": 14,
            "start_line": 15
          }
        },
        "56": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 75,
            "end_line": 16,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "start_col": 37,
            "start_line": 16
          }
        },
        "58": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 38,
            "end_line": 346,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "parent_location": [
              {
                "end_col": 75,
                "end_line": 16,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 42,
                    "end_line": 18,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 31,
                    "start_line": 18
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 37,
                "start_line": 16
              },
              "While trying to update the implicit return value 'syscall_ptr' in:"
            ],
            "start_col": 19,
            "start_line": 346
          }
        },
        "59": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 42,
            "end_line": 7,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
            },
            "parent_location": [
              {
                "end_col": 36,
                "end_line": 15,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 44,
                    "end_line": 19,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 32,
                    "start_line": 19
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 30,
                "start_line": 15
              },
              "While trying to update the implicit return value 'pedersen_ptr' in:"
            ],
            "start_col": 15,
            "start_line": 7
          }
        },
        "60": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 59,
            "end_line": 7,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
            },
            "parent_location": [
              {
                "end_col": 36,
                "end_line": 15,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 50,
                    "end_line": 20,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 35,
                    "start_line": 20
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 30,
                "start_line": 15
              },
              "While trying to update the implicit return value 'range_check_ptr' in:"
            ],
            "start_col": 44,
            "start_line": 7
          }
        },
        "61": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 33,
            "end_line": 16,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 65,
                "end_line": 21,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "start_col": 46,
                "start_line": 21
              },
              "While expanding the reference '__storage_var_temp0' in:"
            ],
            "start_col": 14,
            "start_line": 16
          }
        },
        "62": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.read"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 53,
            "end_line": 22,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "start_col": 9,
            "start_line": 22
          }
        },
        "63": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 64,
            "end_line": 25,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 42,
                "end_line": 7,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 36,
                    "end_line": 26,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 30,
                    "start_line": 26
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 15,
                "start_line": 7
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 37,
            "start_line": 25
          }
        },
        "64": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 81,
            "end_line": 25,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 59,
                "end_line": 7,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 36,
                    "end_line": 26,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 30,
                    "start_line": 26
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 44,
                "start_line": 7
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 66,
            "start_line": 25
          }
        },
        "65": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 36,
            "end_line": 26,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "start_col": 30,
            "start_line": 26
          }
        },
        "67": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 25,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 39,
                "end_line": 364,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 80,
                    "end_line": 27,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                    },
                    "start_col": 9,
                    "start_line": 27
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 20,
                "start_line": 364
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 16,
            "start_line": 25
          }
        },
        "68": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 26,
            "end_line": 26,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "parent_location": [
              {
                "end_col": 43,
                "end_line": 27,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "start_col": 31,
                "start_line": 27
              },
              "While expanding the reference 'storage_addr' in:"
            ],
            "start_col": 14,
            "start_line": 26
          }
        },
        "69": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 79,
            "end_line": 27,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "start_col": 55,
            "start_line": 27
          }
        },
        "70": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 80,
            "end_line": 27,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "start_col": 9,
            "start_line": 27
          }
        },
        "72": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 42,
            "end_line": 7,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
            },
            "parent_location": [
              {
                "end_col": 36,
                "end_line": 26,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 64,
                    "end_line": 21,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 18,
                        "end_line": 28,
                        "input_file": {
                          "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 28
                      },
                      "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                    ],
                    "start_col": 37,
                    "start_line": 21
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 30,
                "start_line": 26
              },
              "While trying to update the implicit return value 'pedersen_ptr' in:"
            ],
            "start_col": 15,
            "start_line": 7
          }
        },
        "73": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 59,
            "end_line": 7,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
            },
            "parent_location": [
              {
                "end_col": 36,
                "end_line": 26,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 81,
                    "end_line": 21,
                    "input_file": {
                      "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 18,
                        "end_line": 28,
                        "input_file": {
                          "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
                        },
                        "start_col": 9,
                        "start_line": 28
                      },
                      "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                    ],
                    "start_col": 66,
                    "start_line": 21
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 30,
                "start_line": 26
              },
              "While trying to update the implicit return value 'range_check_ptr' in:"
            ],
            "start_col": 44,
            "start_line": 7
          }
        },
        "74": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._implementation",
            "contracts.Upgradable._implementation.write"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 18,
            "end_line": 28,
            "input_file": {
              "filename": "autogen/starknet/storage_var/_implementation/impl.cairo"
            },
            "start_col": 9,
            "start_line": 28
          }
        },
        "75": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 19,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 34,
                "end_line": 13,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 39,
                    "end_line": 23,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                    },
                    "start_col": 17,
                    "start_line": 23
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 15,
                "start_line": 13
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 19
          }
        },
        "76": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 20,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 63,
                "end_line": 13,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 39,
                    "end_line": 23,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                    },
                    "start_col": 17,
                    "start_line": 23
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 36,
                "start_line": 13
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 20
          }
        },
        "77": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 21,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 80,
                "end_line": 13,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 39,
                    "end_line": 23,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                    },
                    "start_col": 17,
                    "start_line": 23
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 65,
                "start_line": 13
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 21
          }
        },
        "78": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 39,
            "end_line": 23,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "start_col": 17,
            "start_line": 23
          }
        },
        "80": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 32,
            "end_line": 24,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "start_col": 5,
            "start_line": 24
          }
        },
        "81": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._set_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 29,
            "end_line": 32,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 34,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "start_col": 21,
                "start_line": 34
              },
              "While expanding the reference 'implementation' in:"
            ],
            "start_col": 9,
            "start_line": 32
          }
        },
        "82": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._set_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 36,
            "end_line": 34,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "start_col": 5,
            "start_line": 34
          }
        },
        "84": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._set_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 28,
            "end_line": 28,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 21,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 42,
                    "end_line": 35,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                    },
                    "start_col": 5,
                    "start_line": 35
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 16,
                "start_line": 21
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 28
          }
        },
        "85": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._set_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 36,
            "end_line": 29,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 64,
                "end_line": 21,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 42,
                    "end_line": 35,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                    },
                    "start_col": 5,
                    "start_line": 35
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 37,
                "start_line": 21
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 29
          }
        },
        "86": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._set_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 30,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 81,
                "end_line": 21,
                "input_file": {
                  "filename": "autogen/starknet/storage_var/_implementation/decl.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 42,
                    "end_line": 35,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                    },
                    "start_col": 5,
                    "start_line": 35
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 66,
                "start_line": 21
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 30
          }
        },
        "87": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._set_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 29,
            "end_line": 32,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 41,
                "end_line": 35,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "start_col": 27,
                "start_line": 35
              },
              "While expanding the reference 'implementation' in:"
            ],
            "start_col": 9,
            "start_line": 32
          }
        },
        "88": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._set_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 42,
            "end_line": 35,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "start_col": 5,
            "start_line": 35
          }
        },
        "90": {
          "accessible_scopes": [
            "contracts.Upgradable",
            "contracts.Upgradable._set_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 14,
            "end_line": 36,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "start_col": 5,
            "start_line": 36
          }
        },
        "91": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 14,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 28,
                "end_line": 28,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 40,
                    "end_line": 23,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 5,
                    "start_line": 23
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 28
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 14
          }
        },
        "92": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 15,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 36,
                "end_line": 29,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 40,
                    "end_line": 23,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 5,
                    "start_line": 23
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 29
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 15
          }
        },
        "93": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 16,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 30,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 40,
                    "end_line": 23,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 5,
                    "start_line": 23
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 30
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 16
          }
        },
        "94": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 29,
            "end_line": 18,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 39,
                "end_line": 23,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 25,
                "start_line": 23
              },
              "While expanding the reference 'implementation' in:"
            ],
            "start_col": 9,
            "start_line": 18
          }
        },
        "95": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 40,
            "end_line": 23,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 5,
            "start_line": 23
          }
        },
        "97": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 28,
            "end_line": 28,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 40,
                "end_line": 23,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 38,
                    "end_line": 84,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 27,
                        "end_line": 28,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 24
                      },
                      "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                    ],
                    "start_col": 19,
                    "start_line": 84
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 5,
                "start_line": 23
              },
              "While trying to update the implicit return value 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 28
          }
        },
        "98": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 29,
            "end_line": 18,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 34,
                "end_line": 25,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 20,
                "start_line": 25
              },
              "While expanding the reference 'implementation' in:"
            ],
            "start_col": 9,
            "start_line": 18
          }
        },
        "99": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 23,
            "end_line": 19,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 26,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 27,
                "start_line": 26
              },
              "While expanding the reference 'selector' in:"
            ],
            "start_col": 9,
            "start_line": 19
          }
        },
        "100": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 20,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 27,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 23,
                "start_line": 27
              },
              "While expanding the reference 'calldata_len' in:"
            ],
            "start_col": 9,
            "start_line": 20
          }
        },
        "101": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 21,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 26,
                "end_line": 28,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 18,
                "start_line": 28
              },
              "While expanding the reference 'calldata' in:"
            ],
            "start_col": 9,
            "start_line": 21
          }
        },
        "102": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 28,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 5,
            "start_line": 24
          }
        },
        "104": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 38,
            "end_line": 84,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 28,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 27,
                    "end_line": 14,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 14,
                        "end_line": 29,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 29
                      },
                      "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 14
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 5,
                "start_line": 24
              },
              "While trying to update the implicit return value 'syscall_ptr' in:"
            ],
            "start_col": 19,
            "start_line": 84
          }
        },
        "105": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 36,
            "end_line": 29,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 40,
                "end_line": 23,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 35,
                    "end_line": 15,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 14,
                        "end_line": 29,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 29
                      },
                      "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 15
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 5,
                "start_line": 23
              },
              "While trying to update the implicit return value 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 29
          }
        },
        "106": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 30,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 40,
                "end_line": 23,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 24,
                    "end_line": 16,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 14,
                        "end_line": 29,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 29
                      },
                      "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 16
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 5,
                "start_line": 23
              },
              "While trying to update the implicit return value 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 30
          }
        },
        "107": {
          "accessible_scopes": ["__main__", "__main__", "__main__.constructor"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 14,
            "end_line": 29,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 5,
            "start_line": 29
          }
        },
        "108": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 67,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 16,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 24,
                    "end_line": 2,
                    "input_file": {
                      "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 21,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 9,
                        "start_line": 21
                      },
                      "While handling calldata argument 'calldata'"
                    ],
                    "start_col": 9,
                    "start_line": 2
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 16
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 23,
            "start_line": 1
          }
        },
        "109": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 51,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/8799496fe2567340f6719cfd30d7db5f6b8e7aa420ca97e3a3c3ccbdfbb2e674.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 20,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 55,
                    "end_line": 2,
                    "input_file": {
                      "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 21,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 9,
                        "start_line": 21
                      },
                      "While handling calldata argument 'calldata'"
                    ],
                    "start_col": 28,
                    "start_line": 2
                  },
                  "While expanding the reference '__calldata_arg_calldata_len' in:"
                ],
                "start_col": 9,
                "start_line": 20
              },
              "While handling calldata argument 'calldata_len'"
            ],
            "start_col": 35,
            "start_line": 1
          }
        },
        "110": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 55,
            "end_line": 2,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 21,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 9,
                "start_line": 21
              },
              "While handling calldata argument 'calldata'"
            ],
            "start_col": 1,
            "start_line": 2
          }
        },
        "111": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 40,
            "end_line": 2,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/8799496fe2567340f6719cfd30d7db5f6b8e7aa420ca97e3a3c3ccbdfbb2e674.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 20,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 40,
                    "end_line": 8,
                    "input_file": {
                      "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 21,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 9,
                        "start_line": 21
                      },
                      "While handling calldata argument 'calldata'"
                    ],
                    "start_col": 26,
                    "start_line": 8
                  },
                  "While expanding the reference '__calldata_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 20
              },
              "While handling calldata argument 'calldata_len'"
            ],
            "start_col": 22,
            "start_line": 2
          }
        },
        "113": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 51,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/8799496fe2567340f6719cfd30d7db5f6b8e7aa420ca97e3a3c3ccbdfbb2e674.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 20,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 70,
                    "end_line": 8,
                    "input_file": {
                      "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 21,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 9,
                        "start_line": 21
                      },
                      "While handling calldata argument 'calldata'"
                    ],
                    "start_col": 43,
                    "start_line": 8
                  },
                  "While expanding the reference '__calldata_arg_calldata_len' in:"
                ],
                "start_col": 9,
                "start_line": 20
              },
              "While handling calldata argument 'calldata_len'"
            ],
            "start_col": 35,
            "start_line": 1
          }
        },
        "114": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 74,
            "end_line": 8,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 21,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 9,
                "start_line": 21
              },
              "While handling calldata argument 'calldata'"
            ],
            "start_col": 26,
            "start_line": 8
          }
        },
        "115": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 57,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/1b562308a65653425ce06491fa4b4539466f3251a07e73e099d0afe86a48900e.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 13,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 13
              },
              "While handling calldata of"
            ],
            "start_col": 1,
            "start_line": 1
          }
        },
        "116": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 67,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 16,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 38,
                    "end_line": 3,
                    "input_file": {
                      "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 21,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "parent_location": [
                          {
                            "end_col": 115,
                            "end_line": 1,
                            "input_file": {
                              "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                            },
                            "parent_location": [
                              {
                                "end_col": 17,
                                "end_line": 13,
                                "input_file": {
                                  "filename": "contracts/Proxy.cairo"
                                },
                                "start_col": 6,
                                "start_line": 13
                              },
                              "While constructing the external wrapper for:"
                            ],
                            "start_col": 100,
                            "start_line": 1
                          },
                          "While expanding the reference 'range_check_ptr' in:"
                        ],
                        "start_col": 9,
                        "start_line": 21
                      },
                      "While handling calldata argument 'calldata'"
                    ],
                    "start_col": 23,
                    "start_line": 3
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 16
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 23,
            "start_line": 1
          }
        },
        "117": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 64,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/c7060df96cb0acca1380ae43bf758cab727bfdf73cb5d34a93e24a9742817fda.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 14,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 55,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 44,
                    "start_line": 1
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 14
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 19,
            "start_line": 1
          }
        },
        "118": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 110,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/424b26e79f70343cc02557f1fbd25745138efb26a3dc5c8b593ca765b73138b7.cairo"
            },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 15,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 82,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 70,
                    "start_line": 1
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 15
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 20,
            "start_line": 1
          }
        },
        "119": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 42,
            "end_line": 3,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 21,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 115,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 100,
                    "start_line": 1
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 21
              },
              "While handling calldata argument 'calldata'"
            ],
            "start_col": 23,
            "start_line": 3
          }
        },
        "121": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 53,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/c69461d344491abf07eb0383530bb5331fa0198033b30813dc78971c560b1834.cairo"
            },
            "parent_location": [
              {
                "end_col": 29,
                "end_line": 18,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 161,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 132,
                    "start_line": 1
                  },
                  "While expanding the reference '__calldata_arg_implementation' in:"
                ],
                "start_col": 9,
                "start_line": 18
              },
              "While handling calldata argument 'implementation'"
            ],
            "start_col": 37,
            "start_line": 1
          }
        },
        "122": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 47,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/16776347bfc3c84718728a7d5c6c2189ac0c5f697db91093bdb9d32707f1b476.cairo"
            },
            "parent_location": [
              {
                "end_col": 23,
                "end_line": 19,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 195,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 172,
                    "start_line": 1
                  },
                  "While expanding the reference '__calldata_arg_selector' in:"
                ],
                "start_col": 9,
                "start_line": 19
              },
              "While handling calldata argument 'selector'"
            ],
            "start_col": 31,
            "start_line": 1
          }
        },
        "123": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 51,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/8799496fe2567340f6719cfd30d7db5f6b8e7aa420ca97e3a3c3ccbdfbb2e674.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 20,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 237,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 210,
                    "start_line": 1
                  },
                  "While expanding the reference '__calldata_arg_calldata_len' in:"
                ],
                "start_col": 9,
                "start_line": 20
              },
              "While handling calldata argument 'calldata_len'"
            ],
            "start_col": 35,
            "start_line": 1
          }
        },
        "124": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 58,
            "end_line": 5,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/4f07c4ae795d22b6bc4426e596637ee88f870711dc3768dd8178092f4b2c0b65.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 21,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 271,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 248,
                    "start_line": 1
                  },
                  "While expanding the reference '__calldata_arg_calldata' in:"
                ],
                "start_col": 9,
                "start_line": 21
              },
              "While handling calldata argument 'calldata'"
            ],
            "start_col": 31,
            "start_line": 5
          }
        },
        "126": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 17,
            "end_line": 13,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 6,
            "start_line": 13
          }
        },
        "128": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [
            {
              "location": {
                "end_col": 34,
                "end_line": 2,
                "input_file": {
                  "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 17,
                    "end_line": 13,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 6,
                    "start_line": 13
                  },
                  "While constructing the external wrapper for:"
                ],
                "start_col": 1,
                "start_line": 2
              },
              "n_prefix_newlines": 0
            }
          ],
          "inst": {
            "end_col": 24,
            "end_line": 3,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 13,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 13
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 1,
            "start_line": 3
          }
        },
        "130": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 55,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 13,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 20,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 9,
                    "start_line": 1
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 13
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 44,
            "start_line": 1
          }
        },
        "131": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 82,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 13,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 33,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 21,
                    "start_line": 1
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 13
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 70,
            "start_line": 1
          }
        },
        "132": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 115,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 13,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 34,
                    "start_line": 1
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 13
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 100,
            "start_line": 1
          }
        },
        "133": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 21,
            "end_line": 4,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 13,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 62,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 50,
                    "start_line": 1
                  },
                  "While expanding the reference 'retdata_size' in:"
                ],
                "start_col": 6,
                "start_line": 13
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 20,
            "start_line": 4
          }
        },
        "135": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 16,
            "end_line": 3,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/f256403d2f0c125ca3ded3580dbda18c21308524fea494fff0947406f19aa970.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 13,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 70,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/constructor/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 13,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 13
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 63,
                    "start_line": 1
                  },
                  "While expanding the reference 'retdata' in:"
                ],
                "start_col": 6,
                "start_line": 13
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 9,
            "start_line": 3
          }
        },
        "136": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 71,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/constructor/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 13,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 13
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 1,
            "start_line": 1
          }
        },
        "137": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 40,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 19,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 51,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 51
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 19
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 40
          }
        },
        "138": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 41,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 20,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 51,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 51
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 20
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 41
          }
        },
        "139": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 42,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 21,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 51,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 51
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 21
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 42
          }
        },
        "140": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 49,
            "end_line": 51,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 28,
            "start_line": 51
          }
        },
        "142": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 19,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 49,
                "end_line": 51,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 38,
                    "end_line": 84,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 27,
                        "end_line": 57,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 50,
                        "start_line": 53
                      },
                      "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                    ],
                    "start_col": 19,
                    "start_line": 84
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 28,
                "start_line": 51
              },
              "While trying to update the implicit return value 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 19
          }
        },
        "143": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 51,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 34,
                "end_line": 54,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 20,
                "start_line": 54
              },
              "While expanding the reference 'implementation' in:"
            ],
            "start_col": 10,
            "start_line": 51
          }
        },
        "144": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 44,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 55,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 27,
                "start_line": 55
              },
              "While expanding the reference 'selector' in:"
            ],
            "start_col": 9,
            "start_line": 44
          }
        },
        "145": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 29,
            "end_line": 45,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 36,
                "end_line": 56,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 23,
                "start_line": 56
              },
              "While expanding the reference 'calldata_size' in:"
            ],
            "start_col": 9,
            "start_line": 45
          }
        },
        "146": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 25,
            "end_line": 46,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 26,
                "end_line": 57,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 18,
                "start_line": 57
              },
              "While expanding the reference 'calldata' in:"
            ],
            "start_col": 9,
            "start_line": 46
          }
        },
        "147": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 57,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 50,
            "start_line": 53
          }
        },
        "149": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 38,
            "end_line": 84,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 57,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 27,
                    "end_line": 40,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 56,
                        "end_line": 58,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 58
                      },
                      "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 40
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 50,
                "start_line": 53
              },
              "While trying to update the implicit return value 'syscall_ptr' in:"
            ],
            "start_col": 19,
            "start_line": 84
          }
        },
        "150": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 20,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 49,
                "end_line": 51,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 35,
                    "end_line": 41,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 56,
                        "end_line": 58,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 58
                      },
                      "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 41
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 28,
                "start_line": 51
              },
              "While trying to update the implicit return value 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 20
          }
        },
        "151": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 21,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 49,
                "end_line": 51,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 24,
                    "end_line": 42,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 56,
                        "end_line": 58,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 58
                      },
                      "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 42
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 28,
                "start_line": 51
              },
              "While trying to update the implicit return value 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 21
          }
        },
        "152": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 29,
            "end_line": 53,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 38,
                "end_line": 58,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 26,
                "start_line": 58
              },
              "While expanding the reference 'retdata_size' in:"
            ],
            "start_col": 10,
            "start_line": 53
          }
        },
        "153": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 46,
            "end_line": 53,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 55,
                "end_line": 58,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 48,
                "start_line": 58
              },
              "While expanding the reference 'retdata' in:"
            ],
            "start_col": 31,
            "start_line": 53
          }
        },
        "154": {
          "accessible_scopes": ["__main__", "__main__", "__main__.__default__"],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 56,
            "end_line": 58,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 5,
            "start_line": 58
          }
        },
        "155": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 64,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__default__/c7060df96cb0acca1380ae43bf758cab727bfdf73cb5d34a93e24a9742817fda.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 40,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 55,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__default__/594cfed774c45850575554a78093a7a27edf1e635eae6c967f967cde5f6d9051.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 39,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 39
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 44,
                    "start_line": 1
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 40
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 19,
            "start_line": 1
          }
        },
        "156": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 110,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__default__/424b26e79f70343cc02557f1fbd25745138efb26a3dc5c8b593ca765b73138b7.cairo"
            },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 41,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 82,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__default__/594cfed774c45850575554a78093a7a27edf1e635eae6c967f967cde5f6d9051.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 39,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 39
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 70,
                    "start_line": 1
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 41
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 20,
            "start_line": 1
          }
        },
        "157": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 67,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__default__/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 42,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 115,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__default__/594cfed774c45850575554a78093a7a27edf1e635eae6c967f967cde5f6d9051.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 17,
                        "end_line": 39,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 39
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 100,
                    "start_line": 1
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 42
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 23,
            "start_line": 1
          }
        },
        "158": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 150,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__default__/594cfed774c45850575554a78093a7a27edf1e635eae6c967f967cde5f6d9051.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 39,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 39
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 126,
            "start_line": 1
          }
        },
        "159": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 190,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__default__/594cfed774c45850575554a78093a7a27edf1e635eae6c967f967cde5f6d9051.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 39,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 39
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 166,
            "start_line": 1
          }
        },
        "160": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 226,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__default__/594cfed774c45850575554a78093a7a27edf1e635eae6c967f967cde5f6d9051.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 39,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 39
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 201,
            "start_line": 1
          }
        },
        "161": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 17,
            "end_line": 39,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 6,
            "start_line": 39
          }
        },
        "163": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 71,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
            },
            "parent_location": [
              {
                "end_col": 17,
                "end_line": 39,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 39
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 1,
            "start_line": 1
          }
        },
        "164": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 28,
            "end_line": 64,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 19,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 72,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 72
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 19
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 64
          }
        },
        "165": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 36,
            "end_line": 65,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 20,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 72,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 72
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 20
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 65
          }
        },
        "166": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 66,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 21,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 72,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 72
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 21
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 66
          }
        },
        "167": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 49,
            "end_line": 72,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 28,
            "start_line": 72
          }
        },
        "169": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 19,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 49,
                "end_line": 72,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 105,
                    "input_file": {
                      "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 27,
                        "end_line": 78,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 74
                      },
                      "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                    ],
                    "start_col": 30,
                    "start_line": 105
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 28,
                "start_line": 72
              },
              "While trying to update the implicit return value 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 19
          }
        },
        "170": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 72,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 34,
                "end_line": 75,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 20,
                "start_line": 75
              },
              "While expanding the reference 'implementation' in:"
            ],
            "start_col": 10,
            "start_line": 72
          }
        },
        "171": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 68,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 76,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 27,
                "start_line": 76
              },
              "While expanding the reference 'selector' in:"
            ],
            "start_col": 9,
            "start_line": 68
          }
        },
        "172": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 29,
            "end_line": 69,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 36,
                "end_line": 77,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 23,
                "start_line": 77
              },
              "While expanding the reference 'calldata_size' in:"
            ],
            "start_col": 9,
            "start_line": 69
          }
        },
        "173": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 25,
            "end_line": 70,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 26,
                "end_line": 78,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 18,
                "start_line": 78
              },
              "While expanding the reference 'calldata' in:"
            ],
            "start_col": 9,
            "start_line": 70
          }
        },
        "174": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 78,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 5,
            "start_line": 74
          }
        },
        "176": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 49,
            "end_line": 105,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/venv/lib/python3.9/site-packages/starkware/starknet/common/syscalls.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 78,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 28,
                    "end_line": 64,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 14,
                        "end_line": 79,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 79
                      },
                      "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 64
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 5,
                "start_line": 74
              },
              "While trying to update the implicit return value 'syscall_ptr' in:"
            ],
            "start_col": 30,
            "start_line": 105
          }
        },
        "177": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 20,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 49,
                "end_line": 72,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 36,
                    "end_line": 65,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 14,
                        "end_line": 79,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 79
                      },
                      "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 65
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 28,
                "start_line": 72
              },
              "While trying to update the implicit return value 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 20
          }
        },
        "178": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 21,
            "input_file": {
              "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
            },
            "parent_location": [
              {
                "end_col": 49,
                "end_line": 72,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 24,
                    "end_line": 66,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "parent_location": [
                      {
                        "end_col": 14,
                        "end_line": 79,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 5,
                        "start_line": 79
                      },
                      "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                    ],
                    "start_col": 9,
                    "start_line": 66
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 28,
                "start_line": 72
              },
              "While trying to update the implicit return value 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 21
          }
        },
        "179": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 14,
            "end_line": 79,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 5,
            "start_line": 79
          }
        },
        "180": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 64,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/c7060df96cb0acca1380ae43bf758cab727bfdf73cb5d34a93e24a9742817fda.cairo"
            },
            "parent_location": [
              {
                "end_col": 28,
                "end_line": 64,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 55,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 20,
                        "end_line": 63,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 63
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 44,
                    "start_line": 1
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 64
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 19,
            "start_line": 1
          }
        },
        "181": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 110,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/424b26e79f70343cc02557f1fbd25745138efb26a3dc5c8b593ca765b73138b7.cairo"
            },
            "parent_location": [
              {
                "end_col": 36,
                "end_line": 65,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 82,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 20,
                        "end_line": 63,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 63
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 70,
                    "start_line": 1
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 65
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 20,
            "start_line": 1
          }
        },
        "182": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 67,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 66,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 115,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 20,
                        "end_line": 63,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 63
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 100,
                    "start_line": 1
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 66
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 23,
            "start_line": 1
          }
        },
        "183": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 150,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 126,
            "start_line": 1
          }
        },
        "184": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 190,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 166,
            "start_line": 1
          }
        },
        "185": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 226,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 201,
            "start_line": 1
          }
        },
        "186": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 20,
            "end_line": 63,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 6,
            "start_line": 63
          }
        },
        "188": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [
            {
              "location": {
                "end_col": 34,
                "end_line": 2,
                "input_file": {
                  "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 20,
                    "end_line": 63,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 6,
                    "start_line": 63
                  },
                  "While constructing the external wrapper for:"
                ],
                "start_col": 1,
                "start_line": 2
              },
              "n_prefix_newlines": 0
            }
          ],
          "inst": {
            "end_col": 24,
            "end_line": 3,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 1,
            "start_line": 3
          }
        },
        "190": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 55,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 20,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__l1_default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 20,
                        "end_line": 63,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 63
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 9,
                    "start_line": 1
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 44,
            "start_line": 1
          }
        },
        "191": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 82,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 33,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__l1_default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 20,
                        "end_line": 63,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 63
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 21,
                    "start_line": 1
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 70,
            "start_line": 1
          }
        },
        "192": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 115,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__l1_default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 20,
                        "end_line": 63,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 63
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 34,
                    "start_line": 1
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 100,
            "start_line": 1
          }
        },
        "193": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 21,
            "end_line": 4,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 62,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__l1_default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 20,
                        "end_line": 63,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 63
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 50,
                    "start_line": 1
                  },
                  "While expanding the reference 'retdata_size' in:"
                ],
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 20,
            "start_line": 4
          }
        },
        "195": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 16,
            "end_line": 3,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/edca83f6d2313d62fb8cc1b3fc4ae490d3e5ba3c3ba97a11fef2fe0adc8ace24.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 70,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/__l1_default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 20,
                        "end_line": 63,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 63
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 63,
                    "start_line": 1
                  },
                  "While expanding the reference 'retdata' in:"
                ],
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 9,
            "start_line": 3
          }
        },
        "196": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 71,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/__l1_default__/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
            },
            "parent_location": [
              {
                "end_col": 20,
                "end_line": 63,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 63
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 1,
            "start_line": 1
          }
        },
        "197": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 27,
            "end_line": 88,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 19,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 92,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 92
                  },
                  "While trying to retrieve the implicit argument 'syscall_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 19
              },
              "While expanding the reference 'syscall_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 88
          }
        },
        "198": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 89,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 20,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 92,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 92
                  },
                  "While trying to retrieve the implicit argument 'pedersen_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 20
              },
              "While expanding the reference 'pedersen_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 89
          }
        },
        "199": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 90,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 21,
                "input_file": {
                  "filename": "/Users/axel/argent-contracts-starknet/contracts/Upgradable.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 92,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 28,
                    "start_line": 92
                  },
                  "While trying to retrieve the implicit argument 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 21
              },
              "While expanding the reference 'range_check_ptr' in:"
            ],
            "start_col": 9,
            "start_line": 90
          }
        },
        "200": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 49,
            "end_line": 92,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 28,
            "start_line": 92
          }
        },
        "202": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__main__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 43,
            "end_line": 93,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 5,
            "start_line": 93
          }
        },
        "203": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation_encode_return"
          ],
          "flow_tracking_data": null,
          "hints": [
            {
              "location": {
                "end_col": 38,
                "end_line": 3,
                "input_file": {
                  "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
                },
                "parent_location": [
                  {
                    "end_col": 24,
                    "end_line": 87,
                    "input_file": { "filename": "contracts/Proxy.cairo" },
                    "start_col": 6,
                    "start_line": 87
                  },
                  "While handling return value of"
                ],
                "start_col": 5,
                "start_line": 3
              },
              "n_prefix_newlines": 0
            }
          ],
          "inst": {
            "end_col": 17,
            "end_line": 4,
            "input_file": {
              "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 87
              },
              "While handling return value of"
            ],
            "start_col": 5,
            "start_line": 4
          }
        },
        "205": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation_encode_return"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 55,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/a92ee64e63c8bb0f2c3274f545a28084ca932cab47041624c23a318feb373118.cairo"
            },
            "parent_location": [
              {
                "end_col": 34,
                "end_line": 91,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 14,
                "start_line": 91
              },
              "While handling return value 'implementation'"
            ],
            "start_col": 1,
            "start_line": 1
          }
        },
        "206": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation_encode_return"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 48,
            "end_line": 2,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/a92ee64e63c8bb0f2c3274f545a28084ca932cab47041624c23a318feb373118.cairo"
            },
            "parent_location": [
              {
                "end_col": 34,
                "end_line": 91,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 36,
                    "end_line": 11,
                    "input_file": {
                      "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While handling return value of"
                    ],
                    "start_col": 18,
                    "start_line": 11
                  },
                  "While expanding the reference '__return_value_ptr' in:"
                ],
                "start_col": 14,
                "start_line": 91
              },
              "While handling return value 'implementation'"
            ],
            "start_col": 26,
            "start_line": 2
          }
        },
        "208": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation_encode_return"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 91,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 40,
                    "end_line": 10,
                    "input_file": {
                      "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While handling return value of"
                    ],
                    "start_col": 25,
                    "start_line": 10
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 87
              },
              "While handling return value of"
            ],
            "start_col": 76,
            "start_line": 1
          }
        },
        "209": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation_encode_return"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 63,
            "end_line": 11,
            "input_file": {
              "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 87
              },
              "While handling return value of"
            ],
            "start_col": 18,
            "start_line": 11
          }
        },
        "210": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation_encode_return"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 5,
            "input_file": {
              "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 38,
                    "end_line": 12,
                    "input_file": {
                      "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While handling return value of"
                    ],
                    "start_col": 14,
                    "start_line": 12
                  },
                  "While expanding the reference '__return_value_ptr_start' in:"
                ],
                "start_col": 6,
                "start_line": 87
              },
              "While handling return value of"
            ],
            "start_col": 11,
            "start_line": 5
          }
        },
        "211": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation_encode_return"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 39,
            "end_line": 12,
            "input_file": {
              "filename": "autogen/starknet/external/return/get_implementation/6c4f8228852a83cab107e975dc5b01749918a10e0830a6080b524f80ea93870f.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 87
              },
              "While handling return value of"
            ],
            "start_col": 5,
            "start_line": 9
          }
        },
        "212": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 57,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/arg_processor/1b562308a65653425ce06491fa4b4539466f3251a07e73e099d0afe86a48900e.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 87
              },
              "While handling calldata of"
            ],
            "start_col": 1,
            "start_line": 1
          }
        },
        "213": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 64,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/c7060df96cb0acca1380ae43bf758cab727bfdf73cb5d34a93e24a9742817fda.cairo"
            },
            "parent_location": [
              {
                "end_col": 27,
                "end_line": 88,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 55,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 44,
                    "start_line": 1
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 88
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 19,
            "start_line": 1
          }
        },
        "214": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 110,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/424b26e79f70343cc02557f1fbd25745138efb26a3dc5c8b593ca765b73138b7.cairo"
            },
            "parent_location": [
              {
                "end_col": 35,
                "end_line": 89,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 82,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 70,
                    "start_line": 1
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 89
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 20,
            "start_line": 1
          }
        },
        "215": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 67,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/e651458745e7cd218121c342e0915890767e2f59ddc2e315b8844ad0f47d582e.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 90,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 115,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 100,
                    "start_line": 1
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 9,
                "start_line": 90
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 23,
            "start_line": 1
          }
        },
        "216": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 24,
            "end_line": 87,
            "input_file": { "filename": "contracts/Proxy.cairo" },
            "start_col": 6,
            "start_line": 87
          }
        },
        "218": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 115,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 107,
                    "end_line": 2,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 92,
                    "start_line": 2
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 87
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 100,
            "start_line": 1
          }
        },
        "219": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 108,
            "end_line": 2,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 87
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 48,
            "start_line": 2
          }
        },
        "221": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 55,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 20,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 9,
                    "start_line": 1
                  },
                  "While expanding the reference 'syscall_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 87
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 44,
            "start_line": 1
          }
        },
        "222": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 82,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 33,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 21,
                    "start_line": 1
                  },
                  "While expanding the reference 'pedersen_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 87
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 70,
            "start_line": 1
          }
        },
        "223": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 21,
            "end_line": 2,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 49,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 34,
                    "start_line": 1
                  },
                  "While expanding the reference 'range_check_ptr' in:"
                ],
                "start_col": 6,
                "start_line": 87
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 6,
            "start_line": 2
          }
        },
        "224": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 35,
            "end_line": 2,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 62,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 50,
                    "start_line": 1
                  },
                  "While expanding the reference 'retdata_size' in:"
                ],
                "start_col": 6,
                "start_line": 87
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 23,
            "start_line": 2
          }
        },
        "225": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 44,
            "end_line": 2,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/6ee35718261e0c8adfdeec79697d17565a56453e273a81400fdecab49e0ac118.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "parent_location": [
                  {
                    "end_col": 70,
                    "end_line": 1,
                    "input_file": {
                      "filename": "autogen/starknet/external/get_implementation/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
                    },
                    "parent_location": [
                      {
                        "end_col": 24,
                        "end_line": 87,
                        "input_file": { "filename": "contracts/Proxy.cairo" },
                        "start_col": 6,
                        "start_line": 87
                      },
                      "While constructing the external wrapper for:"
                    ],
                    "start_col": 63,
                    "start_line": 1
                  },
                  "While expanding the reference 'retdata' in:"
                ],
                "start_col": 6,
                "start_line": 87
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 37,
            "start_line": 2
          }
        },
        "226": {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation"
          ],
          "flow_tracking_data": null,
          "hints": [],
          "inst": {
            "end_col": 71,
            "end_line": 1,
            "input_file": {
              "filename": "autogen/starknet/external/get_implementation/4ba2b119ceb30fe10f4cca3c9d73ef620c0fb5eece91b99a99d71217bba1001c.cairo"
            },
            "parent_location": [
              {
                "end_col": 24,
                "end_line": 87,
                "input_file": { "filename": "contracts/Proxy.cairo" },
                "start_col": 6,
                "start_line": 87
              },
              "While constructing the external wrapper for:"
            ],
            "start_col": 1,
            "start_line": 1
          }
        }
      }
    },
    "hints": {
      "0": [
        {
          "accessible_scopes": [
            "starkware.cairo.common.math",
            "starkware.cairo.common.math.assert_not_zero"
          ],
          "code": "from starkware.cairo.common.math_utils import assert_integer\nassert_integer(ids.value)\nassert ids.value % PRIME != 0, f'assert_not_zero failed: {ids.value} = 0.'",
          "flow_tracking_data": {
            "ap_tracking": { "group": 0, "offset": 0 },
            "reference_ids": {
              "starkware.cairo.common.math.assert_not_zero.value": 0
            }
          }
        }
      ],
      "12": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call"
          ],
          "code": "syscall_handler.library_call(segments=segments, syscall_ptr=ids.syscall_ptr)",
          "flow_tracking_data": {
            "ap_tracking": { "group": 1, "offset": 1 },
            "reference_ids": {
              "starkware.starknet.common.syscalls.library_call.syscall_ptr": 1
            }
          }
        }
      ],
      "24": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.library_call_l1_handler"
          ],
          "code": "syscall_handler.library_call_l1_handler(segments=segments, syscall_ptr=ids.syscall_ptr)",
          "flow_tracking_data": {
            "ap_tracking": { "group": 2, "offset": 1 },
            "reference_ids": {
              "starkware.starknet.common.syscalls.library_call_l1_handler.syscall_ptr": 2
            }
          }
        }
      ],
      "33": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_read"
          ],
          "code": "syscall_handler.storage_read(segments=segments, syscall_ptr=ids.syscall_ptr)",
          "flow_tracking_data": {
            "ap_tracking": { "group": 3, "offset": 1 },
            "reference_ids": {
              "starkware.starknet.common.syscalls.storage_read.syscall_ptr": 3
            }
          }
        }
      ],
      "42": [
        {
          "accessible_scopes": [
            "starkware.starknet.common.syscalls",
            "starkware.starknet.common.syscalls.storage_write"
          ],
          "code": "syscall_handler.storage_write(segments=segments, syscall_ptr=ids.syscall_ptr)",
          "flow_tracking_data": {
            "ap_tracking": { "group": 4, "offset": 1 },
            "reference_ids": {
              "starkware.starknet.common.syscalls.storage_write.syscall_ptr": 4
            }
          }
        }
      ],
      "128": [
        {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.constructor"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": { "group": 11, "offset": 60 },
            "reference_ids": {}
          }
        }
      ],
      "188": [
        {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.__l1_default__"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": { "group": 15, "offset": 50 },
            "reference_ids": {}
          }
        }
      ],
      "203": [
        {
          "accessible_scopes": [
            "__main__",
            "__main__",
            "__wrappers__",
            "__wrappers__.get_implementation_encode_return"
          ],
          "code": "memory[ap] = segments.add()",
          "flow_tracking_data": {
            "ap_tracking": { "group": 17, "offset": 0 },
            "reference_ids": {}
          }
        }
      ]
    },
    "identifiers": {
      "__main__.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "__main__.__default__": {
        "decorators": ["external", "raw_input", "raw_output"],
        "pc": 137,
        "type": "function"
      },
      "__main__.__default__.Args": {
        "full_name": "__main__.__default__.Args",
        "members": {
          "calldata": { "cairo_type": "felt*", "offset": 2 },
          "calldata_size": { "cairo_type": "felt", "offset": 1 },
          "selector": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "__main__.__default__.ImplicitArgs": {
        "full_name": "__main__.__default__.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 2 },
          "syscall_ptr": { "cairo_type": "felt*", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "__main__.__default__.Return": {
        "cairo_type": "(retdata_size : felt, retdata : felt*)",
        "type": "type_definition"
      },
      "__main__.__default__.SIZEOF_LOCALS": { "type": "const", "value": 0 },
      "__main__.__l1_default__": {
        "decorators": ["l1_handler", "raw_input"],
        "pc": 164,
        "type": "function"
      },
      "__main__.__l1_default__.Args": {
        "full_name": "__main__.__l1_default__.Args",
        "members": {
          "calldata": { "cairo_type": "felt*", "offset": 2 },
          "calldata_size": { "cairo_type": "felt", "offset": 1 },
          "selector": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "__main__.__l1_default__.ImplicitArgs": {
        "full_name": "__main__.__l1_default__.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 2 },
          "syscall_ptr": { "cairo_type": "felt*", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "__main__.__l1_default__.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "__main__.__l1_default__.SIZEOF_LOCALS": { "type": "const", "value": 0 },
      "__main__._get_implementation": {
        "destination": "contracts.Upgradable._get_implementation",
        "type": "alias"
      },
      "__main__._set_implementation": {
        "destination": "contracts.Upgradable._set_implementation",
        "type": "alias"
      },
      "__main__.constructor": {
        "decorators": ["constructor"],
        "pc": 91,
        "type": "function"
      },
      "__main__.constructor.Args": {
        "full_name": "__main__.constructor.Args",
        "members": {
          "calldata": { "cairo_type": "felt*", "offset": 3 },
          "calldata_len": { "cairo_type": "felt", "offset": 2 },
          "implementation": { "cairo_type": "felt", "offset": 0 },
          "selector": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 4,
        "type": "struct"
      },
      "__main__.constructor.ImplicitArgs": {
        "full_name": "__main__.constructor.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 2 },
          "syscall_ptr": { "cairo_type": "felt*", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "__main__.constructor.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "__main__.constructor.SIZEOF_LOCALS": { "type": "const", "value": 0 },
      "__main__.get_implementation": {
        "decorators": ["view"],
        "pc": 197,
        "type": "function"
      },
      "__main__.get_implementation.Args": {
        "full_name": "__main__.get_implementation.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__main__.get_implementation.ImplicitArgs": {
        "full_name": "__main__.get_implementation.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 2 },
          "syscall_ptr": { "cairo_type": "felt*", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "__main__.get_implementation.Return": {
        "cairo_type": "(implementation : felt)",
        "type": "type_definition"
      },
      "__main__.get_implementation.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__main__.library_call": {
        "destination": "starkware.starknet.common.syscalls.library_call",
        "type": "alias"
      },
      "__main__.library_call_l1_handler": {
        "destination": "starkware.starknet.common.syscalls.library_call_l1_handler",
        "type": "alias"
      },
      "__wrappers__.__default__": {
        "decorators": ["external", "raw_input", "raw_output"],
        "pc": 155,
        "type": "function"
      },
      "__wrappers__.__default__.Args": {
        "full_name": "__wrappers__.__default__.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.__default__.ImplicitArgs": {
        "full_name": "__wrappers__.__default__.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.__default__.Return": {
        "cairo_type": "(syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, size : felt, retdata : felt*)",
        "type": "type_definition"
      },
      "__wrappers__.__default__.SIZEOF_LOCALS": { "type": "const", "value": 0 },
      "__wrappers__.__default__.__wrapped_func": {
        "destination": "__main__.__default__",
        "type": "alias"
      },
      "__wrappers__.__default___encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.__l1_default__": {
        "decorators": ["l1_handler", "raw_input"],
        "pc": 180,
        "type": "function"
      },
      "__wrappers__.__l1_default__.Args": {
        "full_name": "__wrappers__.__l1_default__.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.__l1_default__.ImplicitArgs": {
        "full_name": "__wrappers__.__l1_default__.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.__l1_default__.Return": {
        "cairo_type": "(syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, size : felt, retdata : felt*)",
        "type": "type_definition"
      },
      "__wrappers__.__l1_default__.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.__l1_default__.__wrapped_func": {
        "destination": "__main__.__l1_default__",
        "type": "alias"
      },
      "__wrappers__.__l1_default___encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.constructor": {
        "decorators": ["constructor"],
        "pc": 108,
        "type": "function"
      },
      "__wrappers__.constructor.Args": {
        "full_name": "__wrappers__.constructor.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.constructor.ImplicitArgs": {
        "full_name": "__wrappers__.constructor.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.constructor.Return": {
        "cairo_type": "(syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, size : felt, retdata : felt*)",
        "type": "type_definition"
      },
      "__wrappers__.constructor.SIZEOF_LOCALS": { "type": "const", "value": 0 },
      "__wrappers__.constructor.__wrapped_func": {
        "destination": "__main__.constructor",
        "type": "alias"
      },
      "__wrappers__.constructor_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "__wrappers__.get_implementation": {
        "decorators": ["view"],
        "pc": 212,
        "type": "function"
      },
      "__wrappers__.get_implementation.Args": {
        "full_name": "__wrappers__.get_implementation.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.get_implementation.ImplicitArgs": {
        "full_name": "__wrappers__.get_implementation.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.get_implementation.Return": {
        "cairo_type": "(syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, size : felt, retdata : felt*)",
        "type": "type_definition"
      },
      "__wrappers__.get_implementation.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "__wrappers__.get_implementation.__wrapped_func": {
        "destination": "__main__.get_implementation",
        "type": "alias"
      },
      "__wrappers__.get_implementation_encode_return": {
        "decorators": [],
        "pc": 203,
        "type": "function"
      },
      "__wrappers__.get_implementation_encode_return.Args": {
        "full_name": "__wrappers__.get_implementation_encode_return.Args",
        "members": {
          "range_check_ptr": { "cairo_type": "felt", "offset": 1 },
          "ret_value": { "cairo_type": "(implementation : felt)", "offset": 0 }
        },
        "size": 2,
        "type": "struct"
      },
      "__wrappers__.get_implementation_encode_return.ImplicitArgs": {
        "full_name": "__wrappers__.get_implementation_encode_return.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "__wrappers__.get_implementation_encode_return.Return": {
        "cairo_type": "(range_check_ptr : felt, data_len : felt, data : felt*)",
        "type": "type_definition"
      },
      "__wrappers__.get_implementation_encode_return.SIZEOF_LOCALS": {
        "type": "const",
        "value": 1
      },
      "__wrappers__.get_implementation_encode_return.memcpy": {
        "destination": "starkware.cairo.common.memcpy.memcpy",
        "type": "alias"
      },
      "contracts.Upgradable.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "contracts.Upgradable._get_implementation": {
        "decorators": [],
        "pc": 75,
        "type": "function"
      },
      "contracts.Upgradable._get_implementation.Args": {
        "full_name": "contracts.Upgradable._get_implementation.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "contracts.Upgradable._get_implementation.ImplicitArgs": {
        "full_name": "contracts.Upgradable._get_implementation.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 2 },
          "syscall_ptr": { "cairo_type": "felt*", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "contracts.Upgradable._get_implementation.Return": {
        "cairo_type": "(implementation : felt)",
        "type": "type_definition"
      },
      "contracts.Upgradable._get_implementation.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "contracts.Upgradable._implementation": { "type": "namespace" },
      "contracts.Upgradable._implementation.Args": {
        "full_name": "contracts.Upgradable._implementation.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "contracts.Upgradable._implementation.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "contracts.Upgradable._implementation.ImplicitArgs": {
        "full_name": "contracts.Upgradable._implementation.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "contracts.Upgradable._implementation.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "contracts.Upgradable._implementation.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "contracts.Upgradable._implementation.addr": {
        "decorators": [],
        "pc": 45,
        "type": "function"
      },
      "contracts.Upgradable._implementation.addr.Args": {
        "full_name": "contracts.Upgradable._implementation.addr.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "contracts.Upgradable._implementation.addr.ImplicitArgs": {
        "full_name": "contracts.Upgradable._implementation.addr.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 0
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 2,
        "type": "struct"
      },
      "contracts.Upgradable._implementation.addr.Return": {
        "cairo_type": "(res : felt)",
        "type": "type_definition"
      },
      "contracts.Upgradable._implementation.addr.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "contracts.Upgradable._implementation.hash2": {
        "destination": "starkware.cairo.common.hash.hash2",
        "type": "alias"
      },
      "contracts.Upgradable._implementation.normalize_address": {
        "destination": "starkware.starknet.common.storage.normalize_address",
        "type": "alias"
      },
      "contracts.Upgradable._implementation.read": {
        "decorators": [],
        "pc": 50,
        "type": "function"
      },
      "contracts.Upgradable._implementation.read.Args": {
        "full_name": "contracts.Upgradable._implementation.read.Args",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "contracts.Upgradable._implementation.read.ImplicitArgs": {
        "full_name": "contracts.Upgradable._implementation.read.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 2 },
          "syscall_ptr": { "cairo_type": "felt*", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "contracts.Upgradable._implementation.read.Return": {
        "cairo_type": "(address : felt)",
        "type": "type_definition"
      },
      "contracts.Upgradable._implementation.read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "contracts.Upgradable._implementation.storage_read": {
        "destination": "starkware.starknet.common.syscalls.storage_read",
        "type": "alias"
      },
      "contracts.Upgradable._implementation.storage_write": {
        "destination": "starkware.starknet.common.syscalls.storage_write",
        "type": "alias"
      },
      "contracts.Upgradable._implementation.write": {
        "decorators": [],
        "pc": 63,
        "type": "function"
      },
      "contracts.Upgradable._implementation.write.Args": {
        "full_name": "contracts.Upgradable._implementation.write.Args",
        "members": { "value": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "contracts.Upgradable._implementation.write.ImplicitArgs": {
        "full_name": "contracts.Upgradable._implementation.write.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 2 },
          "syscall_ptr": { "cairo_type": "felt*", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "contracts.Upgradable._implementation.write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "contracts.Upgradable._implementation.write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "contracts.Upgradable._set_implementation": {
        "decorators": [],
        "pc": 81,
        "type": "function"
      },
      "contracts.Upgradable._set_implementation.Args": {
        "full_name": "contracts.Upgradable._set_implementation.Args",
        "members": { "implementation": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "contracts.Upgradable._set_implementation.ImplicitArgs": {
        "full_name": "contracts.Upgradable._set_implementation.ImplicitArgs",
        "members": {
          "pedersen_ptr": {
            "cairo_type": "starkware.cairo.common.cairo_builtins.HashBuiltin*",
            "offset": 1
          },
          "range_check_ptr": { "cairo_type": "felt", "offset": 2 },
          "syscall_ptr": { "cairo_type": "felt*", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "contracts.Upgradable._set_implementation.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "contracts.Upgradable._set_implementation.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "contracts.Upgradable.assert_not_zero": {
        "destination": "starkware.cairo.common.math.assert_not_zero",
        "type": "alias"
      },
      "starkware.cairo.common.cairo_builtins.BitwiseBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.BitwiseBuiltin",
        "members": {
          "x": { "cairo_type": "felt", "offset": 0 },
          "x_and_y": { "cairo_type": "felt", "offset": 2 },
          "x_or_y": { "cairo_type": "felt", "offset": 4 },
          "x_xor_y": { "cairo_type": "felt", "offset": 3 },
          "y": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 5,
        "type": "struct"
      },
      "starkware.cairo.common.cairo_builtins.EcOpBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.EcOpBuiltin",
        "members": {
          "m": { "cairo_type": "felt", "offset": 4 },
          "p": {
            "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
            "offset": 0
          },
          "q": {
            "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
            "offset": 2
          },
          "r": {
            "cairo_type": "starkware.cairo.common.ec_point.EcPoint",
            "offset": 5
          }
        },
        "size": 7,
        "type": "struct"
      },
      "starkware.cairo.common.cairo_builtins.EcPoint": {
        "destination": "starkware.cairo.common.ec_point.EcPoint",
        "type": "alias"
      },
      "starkware.cairo.common.cairo_builtins.HashBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "members": {
          "result": { "cairo_type": "felt", "offset": 2 },
          "x": { "cairo_type": "felt", "offset": 0 },
          "y": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.cairo.common.cairo_builtins.SignatureBuiltin": {
        "full_name": "starkware.cairo.common.cairo_builtins.SignatureBuiltin",
        "members": {
          "message": { "cairo_type": "felt", "offset": 1 },
          "pub_key": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.dict_access.DictAccess": {
        "full_name": "starkware.cairo.common.dict_access.DictAccess",
        "members": {
          "key": { "cairo_type": "felt", "offset": 0 },
          "new_value": { "cairo_type": "felt", "offset": 2 },
          "prev_value": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.cairo.common.ec_point.EcPoint": {
        "full_name": "starkware.cairo.common.ec_point.EcPoint",
        "members": {
          "x": { "cairo_type": "felt", "offset": 0 },
          "y": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.cairo.common.hash.HashBuiltin": {
        "destination": "starkware.cairo.common.cairo_builtins.HashBuiltin",
        "type": "alias"
      },
      "starkware.cairo.common.math.assert_not_zero": {
        "decorators": [],
        "pc": 0,
        "type": "function"
      },
      "starkware.cairo.common.math.assert_not_zero.Args": {
        "full_name": "starkware.cairo.common.math.assert_not_zero.Args",
        "members": { "value": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_not_zero.ImplicitArgs": {
        "full_name": "starkware.cairo.common.math.assert_not_zero.ImplicitArgs",
        "members": {},
        "size": 0,
        "type": "struct"
      },
      "starkware.cairo.common.math.assert_not_zero.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.cairo.common.math.assert_not_zero.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.cairo.common.math.assert_not_zero.value": {
        "cairo_type": "felt",
        "full_name": "starkware.cairo.common.math.assert_not_zero.value",
        "references": [
          {
            "ap_tracking_data": { "group": 0, "offset": 0 },
            "pc": 0,
            "value": "[cast(fp + (-3), felt*)]"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.storage.ADDR_BOUND": {
        "type": "const",
        "value": -106710729501573572985208420194530329073740042555888586719489
      },
      "starkware.starknet.common.storage.MAX_STORAGE_ITEM_SIZE": {
        "type": "const",
        "value": 256
      },
      "starkware.starknet.common.storage.assert_250_bit": {
        "destination": "starkware.cairo.common.math.assert_250_bit",
        "type": "alias"
      },
      "starkware.starknet.common.syscalls.CALL_CONTRACT_SELECTOR": {
        "type": "const",
        "value": 20853273475220472486191784820
      },
      "starkware.starknet.common.syscalls.CallContract": {
        "full_name": "starkware.starknet.common.syscalls.CallContract",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.CallContractRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
            "offset": 5
          }
        },
        "size": 7,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.CallContractRequest": {
        "full_name": "starkware.starknet.common.syscalls.CallContractRequest",
        "members": {
          "calldata": { "cairo_type": "felt*", "offset": 4 },
          "calldata_size": { "cairo_type": "felt", "offset": 3 },
          "contract_address": { "cairo_type": "felt", "offset": 1 },
          "function_selector": { "cairo_type": "felt", "offset": 2 },
          "selector": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 5,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.CallContractResponse": {
        "full_name": "starkware.starknet.common.syscalls.CallContractResponse",
        "members": {
          "retdata": { "cairo_type": "felt*", "offset": 1 },
          "retdata_size": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.DELEGATE_CALL_SELECTOR": {
        "type": "const",
        "value": 21167594061783206823196716140
      },
      "starkware.starknet.common.syscalls.DELEGATE_L1_HANDLER_SELECTOR": {
        "type": "const",
        "value": 23274015802972845247556842986379118667122
      },
      "starkware.starknet.common.syscalls.DEPLOY_SELECTOR": {
        "type": "const",
        "value": 75202468540281
      },
      "starkware.starknet.common.syscalls.Deploy": {
        "full_name": "starkware.starknet.common.syscalls.Deploy",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.DeployRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.DeployResponse",
            "offset": 6
          }
        },
        "size": 9,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.DeployRequest": {
        "full_name": "starkware.starknet.common.syscalls.DeployRequest",
        "members": {
          "class_hash": { "cairo_type": "felt", "offset": 1 },
          "constructor_calldata": { "cairo_type": "felt*", "offset": 4 },
          "constructor_calldata_size": { "cairo_type": "felt", "offset": 3 },
          "contract_address_salt": { "cairo_type": "felt", "offset": 2 },
          "reserved": { "cairo_type": "felt", "offset": 5 },
          "selector": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 6,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.DeployResponse": {
        "full_name": "starkware.starknet.common.syscalls.DeployResponse",
        "members": {
          "constructor_retdata": { "cairo_type": "felt*", "offset": 2 },
          "constructor_retdata_size": { "cairo_type": "felt", "offset": 1 },
          "contract_address": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.DictAccess": {
        "destination": "starkware.cairo.common.dict_access.DictAccess",
        "type": "alias"
      },
      "starkware.starknet.common.syscalls.EMIT_EVENT_SELECTOR": {
        "type": "const",
        "value": 1280709301550335749748
      },
      "starkware.starknet.common.syscalls.EmitEvent": {
        "full_name": "starkware.starknet.common.syscalls.EmitEvent",
        "members": {
          "data": { "cairo_type": "felt*", "offset": 4 },
          "data_len": { "cairo_type": "felt", "offset": 3 },
          "keys": { "cairo_type": "felt*", "offset": 2 },
          "keys_len": { "cairo_type": "felt", "offset": 1 },
          "selector": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 5,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GET_BLOCK_NUMBER_SELECTOR": {
        "type": "const",
        "value": 1448089106835523001438702345020786
      },
      "starkware.starknet.common.syscalls.GET_BLOCK_TIMESTAMP_SELECTOR": {
        "type": "const",
        "value": 24294903732626645868215235778792757751152
      },
      "starkware.starknet.common.syscalls.GET_CALLER_ADDRESS_SELECTOR": {
        "type": "const",
        "value": 94901967781393078444254803017658102643
      },
      "starkware.starknet.common.syscalls.GET_CONTRACT_ADDRESS_SELECTOR": {
        "type": "const",
        "value": 6219495360805491471215297013070624192820083
      },
      "starkware.starknet.common.syscalls.GET_SEQUENCER_ADDRESS_SELECTOR": {
        "type": "const",
        "value": 1592190833581991703053805829594610833820054387
      },
      "starkware.starknet.common.syscalls.GET_TX_INFO_SELECTOR": {
        "type": "const",
        "value": 1317029390204112103023
      },
      "starkware.starknet.common.syscalls.GET_TX_SIGNATURE_SELECTOR": {
        "type": "const",
        "value": 1448089128652340074717162277007973
      },
      "starkware.starknet.common.syscalls.GetBlockNumber": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockNumber",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockNumberRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockNumberRequest",
        "members": { "selector": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockNumberResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockNumberResponse",
        "members": { "block_number": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockTimestamp": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockTimestamp",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockTimestampRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampRequest",
        "members": { "selector": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetBlockTimestampResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetBlockTimestampResponse",
        "members": { "block_timestamp": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetCallerAddress": {
        "full_name": "starkware.starknet.common.syscalls.GetCallerAddress",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetCallerAddressRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetCallerAddressRequest",
        "members": { "selector": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetCallerAddressResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetCallerAddressResponse",
        "members": { "caller_address": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetContractAddress": {
        "full_name": "starkware.starknet.common.syscalls.GetContractAddress",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetContractAddressResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetContractAddressRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetContractAddressRequest",
        "members": { "selector": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetContractAddressResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetContractAddressResponse",
        "members": {
          "contract_address": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetSequencerAddress": {
        "full_name": "starkware.starknet.common.syscalls.GetSequencerAddress",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetSequencerAddressRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressRequest",
        "members": { "selector": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetSequencerAddressResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetSequencerAddressResponse",
        "members": {
          "sequencer_address": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxInfo": {
        "full_name": "starkware.starknet.common.syscalls.GetTxInfo",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetTxInfoResponse",
            "offset": 1
          }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxInfoRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetTxInfoRequest",
        "members": { "selector": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxInfoResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetTxInfoResponse",
        "members": {
          "tx_info": {
            "cairo_type": "starkware.starknet.common.syscalls.TxInfo*",
            "offset": 0
          }
        },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxSignature": {
        "full_name": "starkware.starknet.common.syscalls.GetTxSignature",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
            "offset": 1
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxSignatureRequest": {
        "full_name": "starkware.starknet.common.syscalls.GetTxSignatureRequest",
        "members": { "selector": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.GetTxSignatureResponse": {
        "full_name": "starkware.starknet.common.syscalls.GetTxSignatureResponse",
        "members": {
          "signature": { "cairo_type": "felt*", "offset": 1 },
          "signature_len": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.LIBRARY_CALL_L1_HANDLER_SELECTOR": {
        "type": "const",
        "value": 436233452754198157705746250789557519228244616562
      },
      "starkware.starknet.common.syscalls.LIBRARY_CALL_SELECTOR": {
        "type": "const",
        "value": 92376026794327011772951660
      },
      "starkware.starknet.common.syscalls.LibraryCall": {
        "full_name": "starkware.starknet.common.syscalls.LibraryCall",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.LibraryCallRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.CallContractResponse",
            "offset": 5
          }
        },
        "size": 7,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.LibraryCallRequest": {
        "full_name": "starkware.starknet.common.syscalls.LibraryCallRequest",
        "members": {
          "calldata": { "cairo_type": "felt*", "offset": 4 },
          "calldata_size": { "cairo_type": "felt", "offset": 3 },
          "class_hash": { "cairo_type": "felt", "offset": 1 },
          "function_selector": { "cairo_type": "felt", "offset": 2 },
          "selector": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 5,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.SEND_MESSAGE_TO_L1_SELECTOR": {
        "type": "const",
        "value": 433017908768303439907196859243777073
      },
      "starkware.starknet.common.syscalls.STORAGE_READ_SELECTOR": {
        "type": "const",
        "value": 100890693370601760042082660
      },
      "starkware.starknet.common.syscalls.STORAGE_WRITE_SELECTOR": {
        "type": "const",
        "value": 25828017502874050592466629733
      },
      "starkware.starknet.common.syscalls.SendMessageToL1SysCall": {
        "full_name": "starkware.starknet.common.syscalls.SendMessageToL1SysCall",
        "members": {
          "payload_ptr": { "cairo_type": "felt*", "offset": 3 },
          "payload_size": { "cairo_type": "felt", "offset": 2 },
          "selector": { "cairo_type": "felt", "offset": 0 },
          "to_address": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.StorageRead": {
        "full_name": "starkware.starknet.common.syscalls.StorageRead",
        "members": {
          "request": {
            "cairo_type": "starkware.starknet.common.syscalls.StorageReadRequest",
            "offset": 0
          },
          "response": {
            "cairo_type": "starkware.starknet.common.syscalls.StorageReadResponse",
            "offset": 2
          }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.StorageReadRequest": {
        "full_name": "starkware.starknet.common.syscalls.StorageReadRequest",
        "members": {
          "address": { "cairo_type": "felt", "offset": 1 },
          "selector": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.StorageReadResponse": {
        "full_name": "starkware.starknet.common.syscalls.StorageReadResponse",
        "members": { "value": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.StorageWrite": {
        "full_name": "starkware.starknet.common.syscalls.StorageWrite",
        "members": {
          "address": { "cairo_type": "felt", "offset": 1 },
          "selector": { "cairo_type": "felt", "offset": 0 },
          "value": { "cairo_type": "felt", "offset": 2 }
        },
        "size": 3,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.TxInfo": {
        "full_name": "starkware.starknet.common.syscalls.TxInfo",
        "members": {
          "account_contract_address": { "cairo_type": "felt", "offset": 1 },
          "chain_id": { "cairo_type": "felt", "offset": 6 },
          "max_fee": { "cairo_type": "felt", "offset": 2 },
          "signature": { "cairo_type": "felt*", "offset": 4 },
          "signature_len": { "cairo_type": "felt", "offset": 3 },
          "transaction_hash": { "cairo_type": "felt", "offset": 5 },
          "version": { "cairo_type": "felt", "offset": 0 }
        },
        "size": 7,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.library_call": {
        "decorators": [],
        "pc": 5,
        "type": "function"
      },
      "starkware.starknet.common.syscalls.library_call.Args": {
        "full_name": "starkware.starknet.common.syscalls.library_call.Args",
        "members": {
          "calldata": { "cairo_type": "felt*", "offset": 3 },
          "calldata_size": { "cairo_type": "felt", "offset": 2 },
          "class_hash": { "cairo_type": "felt", "offset": 0 },
          "function_selector": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.library_call.ImplicitArgs": {
        "full_name": "starkware.starknet.common.syscalls.library_call.ImplicitArgs",
        "members": { "syscall_ptr": { "cairo_type": "felt*", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.library_call.Return": {
        "cairo_type": "(retdata_size : felt, retdata : felt*)",
        "type": "type_definition"
      },
      "starkware.starknet.common.syscalls.library_call.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.syscalls.library_call.syscall_ptr": {
        "cairo_type": "felt*",
        "full_name": "starkware.starknet.common.syscalls.library_call.syscall_ptr",
        "references": [
          {
            "ap_tracking_data": { "group": 1, "offset": 0 },
            "pc": 5,
            "value": "[cast(fp + (-7), felt**)]"
          },
          {
            "ap_tracking_data": { "group": 1, "offset": 1 },
            "pc": 12,
            "value": "cast([fp + (-7)] + 7, felt*)"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.syscalls.library_call_l1_handler": {
        "decorators": [],
        "pc": 17,
        "type": "function"
      },
      "starkware.starknet.common.syscalls.library_call_l1_handler.Args": {
        "full_name": "starkware.starknet.common.syscalls.library_call_l1_handler.Args",
        "members": {
          "calldata": { "cairo_type": "felt*", "offset": 3 },
          "calldata_size": { "cairo_type": "felt", "offset": 2 },
          "class_hash": { "cairo_type": "felt", "offset": 0 },
          "function_selector": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 4,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.library_call_l1_handler.ImplicitArgs": {
        "full_name": "starkware.starknet.common.syscalls.library_call_l1_handler.ImplicitArgs",
        "members": { "syscall_ptr": { "cairo_type": "felt*", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.library_call_l1_handler.Return": {
        "cairo_type": "(retdata_size : felt, retdata : felt*)",
        "type": "type_definition"
      },
      "starkware.starknet.common.syscalls.library_call_l1_handler.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.syscalls.library_call_l1_handler.syscall_ptr": {
        "cairo_type": "felt*",
        "full_name": "starkware.starknet.common.syscalls.library_call_l1_handler.syscall_ptr",
        "references": [
          {
            "ap_tracking_data": { "group": 2, "offset": 0 },
            "pc": 17,
            "value": "[cast(fp + (-7), felt**)]"
          },
          {
            "ap_tracking_data": { "group": 2, "offset": 1 },
            "pc": 24,
            "value": "cast([fp + (-7)] + 7, felt*)"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.syscalls.storage_read": {
        "decorators": [],
        "pc": 29,
        "type": "function"
      },
      "starkware.starknet.common.syscalls.storage_read.Args": {
        "full_name": "starkware.starknet.common.syscalls.storage_read.Args",
        "members": { "address": { "cairo_type": "felt", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.storage_read.ImplicitArgs": {
        "full_name": "starkware.starknet.common.syscalls.storage_read.ImplicitArgs",
        "members": { "syscall_ptr": { "cairo_type": "felt*", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.storage_read.Return": {
        "cairo_type": "(value : felt)",
        "type": "type_definition"
      },
      "starkware.starknet.common.syscalls.storage_read.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.syscalls.storage_read.syscall_ptr": {
        "cairo_type": "felt*",
        "full_name": "starkware.starknet.common.syscalls.storage_read.syscall_ptr",
        "references": [
          {
            "ap_tracking_data": { "group": 3, "offset": 0 },
            "pc": 29,
            "value": "[cast(fp + (-4), felt**)]"
          },
          {
            "ap_tracking_data": { "group": 3, "offset": 1 },
            "pc": 33,
            "value": "cast([fp + (-4)] + 3, felt*)"
          }
        ],
        "type": "reference"
      },
      "starkware.starknet.common.syscalls.storage_write": {
        "decorators": [],
        "pc": 37,
        "type": "function"
      },
      "starkware.starknet.common.syscalls.storage_write.Args": {
        "full_name": "starkware.starknet.common.syscalls.storage_write.Args",
        "members": {
          "address": { "cairo_type": "felt", "offset": 0 },
          "value": { "cairo_type": "felt", "offset": 1 }
        },
        "size": 2,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.storage_write.ImplicitArgs": {
        "full_name": "starkware.starknet.common.syscalls.storage_write.ImplicitArgs",
        "members": { "syscall_ptr": { "cairo_type": "felt*", "offset": 0 } },
        "size": 1,
        "type": "struct"
      },
      "starkware.starknet.common.syscalls.storage_write.Return": {
        "cairo_type": "()",
        "type": "type_definition"
      },
      "starkware.starknet.common.syscalls.storage_write.SIZEOF_LOCALS": {
        "type": "const",
        "value": 0
      },
      "starkware.starknet.common.syscalls.storage_write.syscall_ptr": {
        "cairo_type": "felt*",
        "full_name": "starkware.starknet.common.syscalls.storage_write.syscall_ptr",
        "references": [
          {
            "ap_tracking_data": { "group": 4, "offset": 0 },
            "pc": 37,
            "value": "[cast(fp + (-5), felt**)]"
          },
          {
            "ap_tracking_data": { "group": 4, "offset": 1 },
            "pc": 42,
            "value": "cast([fp + (-5)] + 3, felt*)"
          }
        ],
        "type": "reference"
      }
    },
    "main_scope": "__main__",
    "prime": "0x800000000000011000000000000000000000000000000000000000000000001",
    "reference_manager": {
      "references": [
        {
          "ap_tracking_data": { "group": 0, "offset": 0 },
          "pc": 0,
          "value": "[cast(fp + (-3), felt*)]"
        },
        {
          "ap_tracking_data": { "group": 1, "offset": 0 },
          "pc": 5,
          "value": "[cast(fp + (-7), felt**)]"
        },
        {
          "ap_tracking_data": { "group": 2, "offset": 0 },
          "pc": 17,
          "value": "[cast(fp + (-7), felt**)]"
        },
        {
          "ap_tracking_data": { "group": 3, "offset": 0 },
          "pc": 29,
          "value": "[cast(fp + (-4), felt**)]"
        },
        {
          "ap_tracking_data": { "group": 4, "offset": 0 },
          "pc": 37,
          "value": "[cast(fp + (-5), felt**)]"
        }
      ]
    }
  }
}
`;
