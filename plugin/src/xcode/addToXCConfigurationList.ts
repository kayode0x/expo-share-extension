import { XcodeProject } from "expo/config-plugins";

export function addXCConfigurationList(
  xcodeProject: XcodeProject,
  {
    targetName,
    currentProjectVersion,
    bundleIdentifier,
    marketingVersion,
  }: {
    targetName: string;
    currentProjectVersion: string;
    bundleIdentifier: string;
    marketingVersion?: string;
  }
) {
  const commonBuildSettings = {
    ASSETCATALOG_COMPILER_APPICON_NAME: "AppIcon",
    CLANG_ENABLE_MODULES: "YES",
    CURRENT_PROJECT_VERSION: `"${currentProjectVersion}"`,
    INFOPLIST_FILE: `${targetName}/Info.plist`,
    IPHONEOS_DEPLOYMENT_TARGET: `"13.0"`,
    // LD_RUNPATH_SEARCH_PATHS: "$(inherited) @executable_path/Frameworks",
    // OTHER_LDFLAGS: `("$(inherited)","-ObjC","-lc++",)`,
    PRODUCT_BUNDLE_IDENTIFIER: `"${bundleIdentifier}"`,
    PRODUCT_NAME: `"${targetName}"`,
    SWIFT_VERSION: "5.0",
    VERSIONING_SYSTEM: `"apple-generic"`,
    // TARGETED_DEVICE_FAMILY: `"1,2"`,
    CODE_SIGN_ENTITLEMENTS: `${targetName}/${targetName}.entitlements`,
    CODE_SIGN_STYLE: "Automatic",
    GENERATE_INFOPLIST_FILE: "YES",
    MARKETING_VERSION: `"${marketingVersion ?? 1}"`,
    SWIFT_EMIT_LOC_STRINGS: "YES",
    TARGETED_DEVICE_FAMILY: `"1,2"`,
  };

  const buildConfigurationsList = [
    {
      name: "Debug",
      isa: "XCBuildConfiguration",
      buildSettings: {
        ...commonBuildSettings,
      },
    },
    {
      name: "Release",
      isa: "XCBuildConfiguration",
      buildSettings: {
        ...commonBuildSettings,
      },
    },
  ];

  const xCConfigurationList = xcodeProject.addXCConfigurationList(
    buildConfigurationsList,
    "Release",
    `Build configuration list for PBXNativeTarget "${targetName}"`
  );

  return xCConfigurationList;
}