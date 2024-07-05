vcpkg_from_gitlab(
  GITLAB_URL https://gitlab.com
  OUT_SOURCE_PATH SOURCE_PATH
  REPO graphviz/graphviz
  REF "${VERSION}"
  SHA512 2b19fa78b9b121140546e679a6d8892b54ca4fe13a8b51a3b3fd9dd90dc910891931e5e8194a5c9324cbb112007416dc841063d84c90eb5e678da16adc8eeff9
  HEAD_REF main
)

file(COPY ${CMAKE_CURRENT_LIST_DIR}/CMakeLists.txt DESTINATION ${SOURCE_PATH})
# file(COPY ${CMAKE_CURRENT_LIST_DIR}/lib DESTINATION "${SOURCE_PATH}/lib")

vcpkg_cmake_configure(
    SOURCE_PATH "${SOURCE_PATH}"
    OPTIONS
        -Denable_ltdl=OFF
        -Dwith_gvedit=OFF
        -Dwith_smyrna=OFF
        -Dwith_zlib=OFF
        -Duse_win_pre_inst_libs=OFF
        -DBUILD_SHARED_LIBS=OFF
)
vcpkg_cmake_install()
# vcpkg_cmake_config_fixup(PACKAGE_NAME "graphviz" CONFIG_PATH "share/cmake/graphviz")

file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/debug/include")
file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/debug/share")
file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/debug/lib/pkgconfig")
file(REMOVE_RECURSE "${CURRENT_PACKAGES_DIR}/lib/pkgconfig")

file(INSTALL "${SOURCE_PATH}/LICENSE" DESTINATION "${CURRENT_PACKAGES_DIR}/share/${PORT}" RENAME copyright)
