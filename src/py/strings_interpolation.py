value = 3
print("The value %s in interpolated" % value)
print("The value %(value)s in interpolated" % locals())

print("The value {0} in interpolated".format(value))
print("The value {value!s} in interpolated".format(**locals()))