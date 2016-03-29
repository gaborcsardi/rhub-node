
var essential_dependency_types = ['Depends', 'LinkingTo', 'Imports' ];
var optional_dependency_types =  ['Suggests', 'Enhances' ];
var dependency_types =
    essential_dependency_types.concat(optional_dependency_types);

var base_packages = ['base', 'compiler', 'datasets', 'graphics',
                     'grDevices', 'grid', 'methods', 'parallel',
                     'splines', 'stats', 'stats4', 'tcltk', 'tools',
                     'utils'];

var recommended_packages = ['KernSmooth', 'Matrix', 'mgcv', 'boot',
			    'class', 'cluster', 'codetools', 'foreign',
			    'KernSmooth', 'lattice', 'MASS', 'Matrix',
			    'mgcv', 'nlme', 'nnet', 'rpart', 'spatial',
			    'survival'];

api = {
    valid_package_name:     '[[:alpha:]][[:alnum:].]*[[:alnum:]]',
    valid_package_version:  '([[:digit:]]+[.-]){1,}[[:digit:]]+',
    valid_R_system_version: '[[:digit:]]+\\.[[:digit:]]+\\.[[:digit:]]+',
    valid_numeric_version:  '([[:digit:]]+[.-])*[[:digit:]]+',

    essential_dependency_types: essential_dependency_types,
    optional_dependency_types: optional_dependency_types,
    dependency_types: dependency_types,

    base_packages = base_packages,
    recommended_packages = recommended_packages
};

module.exports = api;
