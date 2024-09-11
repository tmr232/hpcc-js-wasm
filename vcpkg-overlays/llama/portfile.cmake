vcpkg_from_github(
    OUT_SOURCE_PATH SOURCE_PATH
    REPO ggerganov/llama.cpp
    REF "${VERSION}"
    SHA512 029d225cec20f617b6941e5398301a2a8ecbc7ed526306704dc2a2bbf83fc4cf92d88bbdbd73123ec65025626ec1143804441b887fcce56631c9cf10353584d9
    HEAD_REF master
)

vcpkg_cmake_configure(
    SOURCE_PATH "${SOURCE_PATH}"
    OPTIONS
        -DLLAMA_BUILD_TESTS=OFF
        -DLLAMA_BUILD_EXAMPLES=OFF
        -DLLAMA_BUILD_SERVER=OFF
        -DLLAMA_WASM_SINGLE_FILE=OFF
        -DGGML_OPENMP=OFF
)

vcpkg_cmake_install()

vcpkg_copy_pdbs()
vcpkg_fixup_pkgconfig()
vcpkg_cmake_config_fixup(CONFIG_PATH lib/cmake/llama)

file(INSTALL ${SOURCE_PATH}/common DESTINATION ${CURRENT_PACKAGES_DIR}/share/${PORT})

file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/debug/include")
file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/debug/share")
file(INSTALL ${SOURCE_PATH}/LICENSE DESTINATION ${CURRENT_PACKAGES_DIR}/share/${PORT} RENAME copyright)
