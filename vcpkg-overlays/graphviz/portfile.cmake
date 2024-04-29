vcpkg_from_gitlab(
  GITLAB_URL https://gitlab.com
  OUT_SOURCE_PATH SOURCE_PATH
  REPO graphviz/graphviz
  REF "${VERSION}"
  SHA512 7630de306249059b049967c3a77c6077b04082b07af27e1f0f0ba2659e09827a2f08dbda78c3c4f601bb9c46fdd0db506ba49a1d45cdc27f9daa7a9f3f960732
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
